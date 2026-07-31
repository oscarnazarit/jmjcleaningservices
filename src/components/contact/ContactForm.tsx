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
import { useState } from 'react';

const ServiceOptions = [
  { label: 'Select a service', value: null },
  { value: 'residential', label: 'Residential Cleaning' },
  { value: 'commercial', label: 'Commercial Cleaning' },
  { value: 'deep-cleaning', label: 'Deep Cleaning' },
  { value: 'move-in-out', label: 'Move In/Out Cleaning' },
  { value: 'post-construction', label: 'Post-Construction Cleaning' },
  { value: 'specialty-services', label: 'Specialty Services' },
];

const BusinessTypeOptions = [
  { label: 'Select a business type', value: '' },
  { label: 'Office', value: 'office' },
  { label: 'Retail', value: 'retail' },
  { label: 'Medical', value: 'medical' },
  { label: 'Industrial', value: 'industrial' },
  { label: 'Gym/Fitness', value: 'gym-fitness' },
  { label: 'Restaurant', value: 'restaurant' },
  { label: 'Other', value: 'other' },
];

const SpecialtyServiceOptions = [
  { label: 'Select a specialty service', value: '' },
  { label: 'Carpet Cleaning', value: 'carpet-cleaning' },
  { label: 'Pressure Washing', value: 'pressure-washing' },
  { label: 'Window Cleaning', value: 'window-cleaning' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [specialtyType, setSpecialtyType] = useState('');
  const [description, setDescription] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    if (!name.trim() || !email.trim() || !service.trim() || !agreement) {
      alert('Please fill out all required fields and agree to the user agreement.');
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
          businessType,
          specialtyType,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const validatePhone = (value: string) => {
    if (!value) return null;
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 10 && digits.length !== 11) return 'Please enter a valid US phone number';
    return null;
  };

  return (
    <div className="w-full max-w-md mx-auto p-2">
      {submitted ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-600">
            Your message has been submitted successfully. We will get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name-field"
                    placeholder="John Doe"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email-field"
                    placeholder="john.doe@example.com"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FieldDescription>
                    We&apos;ll never share your email with anyone else.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone Number (Optional)</FieldLabel>
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
              <FieldLabel htmlFor="service-select">Service</FieldLabel>
              <Select items={ServiceOptions} onValueChange={(value) => setService(value as string)}>
                <SelectTrigger id="service-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {ServiceOptions.map((item) => (
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
                <FieldLabel htmlFor="business-type">Business Type</FieldLabel>
                <Select onValueChange={(value) => setBusinessType(value as string)}>
                  <SelectTrigger id="business-type">
                    <SelectValue placeholder="Select a business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {BusinessTypeOptions.map((item) => (
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
                <FieldLabel htmlFor="specialty-service">Specialty Service</FieldLabel>
                <Select onValueChange={(value) => setSpecialtyType(value as string)}>
                  <SelectTrigger id="specialty-service">
                    <SelectValue placeholder="Select a specialty service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {SpecialtyServiceOptions.map((item) => (
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
                    <FieldLabel htmlFor="bedrooms">Number of Bedrooms</FieldLabel>
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
                    <FieldLabel htmlFor="bathrooms">Number of Bathrooms</FieldLabel>
                    <Input
                      id="bathrooms"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
            ) : null}
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="service-description">
                    Service Description (Optional)
                  </FieldLabel>
                  <Textarea
                    id="service-description"
                    placeholder="A short description of your cleaning needs..."
                    className="resize-none"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldLegend>User Agreement</FieldLegend>
              <FieldDescription>
                A quick confirmation that you agree to be contacted by JMJ Cleaning Services LLC
                regarding your request for a free quote.
              </FieldDescription>
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
                      I agree to be contacted by JMJ Cleaning Services LLC regarding my request for
                      a free quote. <span className="ml-1 text-red-500">*</span>
                    </p>
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit" disabled={loading} className="bg-[rgb(86,155,221)]">
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      )}
    </div>
  );
}
