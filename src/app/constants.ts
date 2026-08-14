export const companyName = 'JMJ Cleaning Services LLC';
export const companyEmail = 'jmjcleaningservicesllc@gmail.com';
export const companyPhoneNumber = '515-421-8259';
export type Service = {
  name: string;
  label: string;
  description: string;
  shortDescription: string;
  image: string;
  includes: string[];
  optionalServices: string[];
};
export const serviceTypes: Service[] = [
  {
    name: 'residential',
    label: 'Residential Cleaning',
    description:
      'Regular house cleaning for a fresh, comfortable home with dependable care and attention to detail.',
    shortDescription: 'We clean wherever you call home.',
    image: '/residential-service.jpg',
    includes: [
      'Dusting & surface cleaning',
      'Kitchen counters & sink',
      'Bathroom cleaning',
      'Toilets, tubs & showers',
      'Mirrors',
      'Vacuuming',
      'Mopping',
      'Cobweb removal',
      'General tidying',
    ],
    optionalServices: [
      'Refrigerator Interior',
      'Oven Interior',
      'Cabinet Interiors',
      'Interior Windows',
      'Heavy Pet Hair',
      'Heavy Buildup',
      'Garage Cleaning',
      'Laundry Service',
    ],
  },
  {
    name: 'commercial',
    label: 'Commercial Cleaning',
    description:
      'We provide dependable commercial cleaning for offices, retail spaces, and other workplaces with flexible scheduling.',
    shortDescription: 'Reliable cleaning for busy businesses.',
    image: '/commercial-service.jpg',
    includes: [],
    optionalServices: [],
  },
  {
    name: 'deep',
    label: 'Deep Cleaning',
    description:
      'Detailed deep cleaning for homes that need more than routine maintenance, with extra attention to often-overlooked areas.',
    shortDescription: 'A thorough reset for your space.',
    image: '/deep-cleaning-service.jpg',
    includes: [
      'Baseboards',
      'Doors & trim',
      'Light fixtures',
      'Cabinet fronts',
      'Detailed kitchen & bathroom cleaning',
      'Hard-to-reach areas',
      'Dust and buildup',
      'Thorough floor care',
    ],
    optionalServices: [
      'Refrigerator Interior',
      'Oven Interior',
      'Cabinet Interiors',
      'Interior Windows',
      'Heavy Pet Hair',
      'Heavy Buildup',
      'Garage Cleaning',
      'Laundry Service',
    ],
  },
  {
    name: 'move',
    label: 'Move In/Out',
    description:
      'Moving? Let JMJ take care of the cleaning so you can focus on the move and enjoy a spotless transition.',
    shortDescription: 'Clean, polished transitions for every move.',
    image: '/move-service.jpg',
    includes: [
      'Kitchen & bathrooms',
      'Inside cabinets',
      'Appliances',
      'Baseboards',
      'Doors & trim',
      'Closets',
      'Window sills',
      'Floors',
      'Dust & cobweb removal',
      'Vacuuming & mopping',
    ],
    optionalServices: [
      'Refrigerator Interior',
      'Oven Interior',
      'Cabinet Interiors',
      'Interior Windows',
      'Heavy Pet Hair',
      'Heavy Buildup',
      'Garage Cleaning',
      'Laundry Service',
    ],
  },
  {
    name: 'post-construction',
    label: 'Post-Construction',
    description:
      'Our post-construction cleaning removes dust, debris, and residue so newly finished spaces are ready to enjoy.',
    shortDescription: 'Finishing touches for newly completed projects.',
    image: '/post-construction-service.jpg',
    includes: [],
    optionalServices: [],
  },
  {
    name: 'special',
    label: 'Special Services',
    description:
      'We offer additional cleaning support for unique needs, seasonal projects, and one-time requests.',
    shortDescription: 'Flexible help for special cleaning needs.',
    image: '/special-services.jpg',
    includes: [],
    optionalServices: [],
  },
];
