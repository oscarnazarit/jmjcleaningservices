'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';
import { Upload } from 'lucide-react';
import { useState } from 'react';

type ContactFormProps = {
  onSubmitted?: () => void;
};

const MAX_PHOTOS_PER_REQUEST = 3;
const MAX_IMAGE_DIMENSION = 1600;

const compressImage = (file: File) =>
  new Promise<{ name: string; data: string }>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Failed to read file'));
        return;
      }

      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(image.width, image.height));
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('Failed to prepare image'));
          return;
        }

        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.72);
        const fileName = `${file.name.replace(/\.[^/.]+$/, '')}.jpg`;

        resolve({ name: fileName, data: compressedDataUrl.split(',')[1] ?? compressedDataUrl });
      };

      image.onerror = () => reject(new Error('Failed to read file'));
      image.src = result;
    };

    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });

export default function ContactForm({ onSubmitted }: ContactFormProps) {
  const { language } = useLanguage();
  const text = copy[language].contact;

  const serviceOptions = [
    { label: text.service_select_placeholder, value: '' },
    ...text.service_options,
  ];

  const businessTypeOptions = [
    { label: text.business_type_placeholder, value: '' },
    ...text.business_type_options,
  ];

  const specialtyServiceOptions = [
    { label: text.specialty_service_placeholder, value: '' },
    ...text.specialty_service_options,
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [specialtyType, setSpecialtyType] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<Array<{ name: string; data: string }>>([]);
  const [agreement, setAgreement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) {
      setPhotos([]);
      return;
    }

    const remainingSlots = MAX_PHOTOS_PER_REQUEST - photos.length;
    if (remainingSlots <= 0) {
      alert(`You can upload up to ${MAX_PHOTOS_PER_REQUEST} photos per request.`);
      event.target.value = '';
      return;
    }

    const selectedFiles = files.slice(0, remainingSlots);
    if (selectedFiles.length !== files.length) {
      alert(`You can upload up to ${MAX_PHOTOS_PER_REQUEST} photos per request.`);
    }

    const nextPhotos = await Promise.all(selectedFiles.map((file) => compressImage(file)));

    setPhotos((current) => {
      const merged = [...current, ...nextPhotos];
      const unique = merged.filter(
        (photo, index, array) =>
          index === array.findIndex((item) => item.name === photo.name && item.data === photo.data)
      );
      return unique.slice(0, MAX_PHOTOS_PER_REQUEST);
    });

    event.target.value = '';
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    if (!name.trim() || !email.trim() || !service.trim() || !agreement) {
      alert(text.required_error);
      return;
    }
    setLoading(true);
    const phoneValidation = validatePhone(phone);
    if (phoneValidation) {
      setPhoneError(phoneValidation);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          description,
          bedrooms,
          bathrooms,
          squareFootage,
          businessType,
          specialtyType,
          photos,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      onSubmitted?.();
    } catch {
      alert(text.submission_error);
    } finally {
      setLoading(false);
    }
  };

  const validatePhone = (value: string) => {
    if (!value) return null;
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 10 && digits.length !== 11) return text.phone_error;
    return null;
  };

  return (
    <div className="w-full max-w-md mx-auto p-2">
      <form onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">{text.name_label}</FieldLabel>
                  <Input
                    id="name-field"
                    placeholder={text.name_placeholder}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">{text.email_label}</FieldLabel>
                  <Input
                    id="email-field"
                    placeholder={text.email_placeholder}
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FieldDescription>{text.email_note}</FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">{text.phone_label}</FieldLabel>
                  <Input
                    id="phone-field"
                    placeholder="(123) 456-7890"
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {phoneError && <FieldError>{phoneError}</FieldError>}
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <FieldLabel htmlFor="service-select">{text.service_label}</FieldLabel>
              <Select items={serviceOptions} onValueChange={(value) => setService(value as string)}>
                <SelectTrigger id="service-select">
                  <SelectValue placeholder={text.service_select_placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {serviceOptions.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            {service === 'commercial' ? (
              <Field>
                <FieldLabel htmlFor="business-type">{text.business_type_label}</FieldLabel>
                <Select onValueChange={(value) => setBusinessType(value as string)}>
                  <SelectTrigger id="business-type">
                    <SelectValue placeholder={text.business_type_placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {businessTypeOptions.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            ) : service === 'specialty-services' ? (
              <Field>
                <FieldLabel htmlFor="specialty-service">{text.specialty_service_label}</FieldLabel>
                <Select onValueChange={(value) => setSpecialtyType(value as string)}>
                  <SelectTrigger id="specialty-service">
                    <SelectValue placeholder={text.specialty_service_placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {specialtyServiceOptions.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            ) : service === 'residential' ||
              service === 'deep-cleaning' ||
              service === 'move-in-out' ||
              service === 'post-construction' ? (
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="bedrooms">{text.bedrooms_label}</FieldLabel>
                    <Input
                      id="bedrooms"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="bathrooms">{text.bathrooms_label}</FieldLabel>
                    <Input
                      id="bathrooms"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="square-footage">{text.square_footage_label}</FieldLabel>
                    <Select onValueChange={(value) => setSquareFootage(value as string)}>
                      <SelectTrigger id="square-footage">
                        <SelectValue placeholder={text.square_footage_placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {text.square_footage_options.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
            ) : null}
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="service-description">
                    {text.service_description_label}
                  </FieldLabel>
                  <Textarea
                    id="service-description"
                    placeholder={text.service_description_placeholder}
                    className="resize-none"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="photos">{text.photos_label}</FieldLabel>
                  <label
                    htmlFor="photos"
                    className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent"
                  >
                    <span className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      <span>
                        {photos.length > 0
                          ? `${photos.length} photo${photos.length > 1 ? 's' : ''} selected`
                          : language === 'en'
                            ? 'Upload photos'
                            : 'Subir fotos'}
                      </span>
                    </span>
                    <span className="text-xs font-medium text-foreground">Browse</span>
                  </label>
                  <Input
                    id="photos"
                    type="file"
                    accept="image/*"
                    multiple={true}
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  {photos.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {photos.map((photo) => (
                          <li key={`${photo.name}-${photo.data.slice(0, 20)}`} className="truncate">
                            • {photo.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldLegend>{text.agreement_label}</FieldLegend>
              <FieldDescription>{text.agreement_description}</FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox
                    id="agreement"
                    checked={agreement}
                    onCheckedChange={(checked) => setAgreement(Boolean(checked))}
                    required
                  />
                  <FieldLabel htmlFor="agreement" className="font-normal">
                    <p>
                      {text.agreement_checkbox} <span className="ml-1 text-red-500">*</span>
                    </p>
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit" disabled={loading} className="bg-[rgb(86,155,221)]">
                {loading ? text.submitting : text.submit}
              </Button>
            </Field>
          </FieldGroup>
        </form>
    </div>
  );
}
