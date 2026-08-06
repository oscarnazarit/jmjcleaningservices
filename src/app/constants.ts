export const companyName = 'JMJ Cleaning Services LLC';
export const companyEmail = 'jmjcleaningservicesllc@gmail.com';
export const companyPhoneNumber = '515-421-8259';
export type Service = {
  name: string;
  label: string;
  description: string;
  shortDescription: string;
  image: string;
};
export const serviceTypes: Service[] = [
  {
    name: 'residential',
    label: 'Residential Cleaning',
    description:
      "Our residential cleaning packages offer flexible scheduling and cleaning options. We'\ll work around your schedule.",
    shortDescription: 'We clean wherever you call home.',
    image: '/residential-service.jpg',
  },
  {
    name: 'commercial',
    label: 'Commercial Cleaning',
    description:
      'We provide dependable commercial cleaning for offices, retail spaces, and other workplaces with flexible scheduling.',
    shortDescription: 'Reliable cleaning for busy businesses.',
    image: '/commercial-service.jpg',
  },
  {
    name: 'deep',
    label: 'Deep Cleaning',
    description:
      'Our deep cleaning service targets built-up dirt, kitchens, bathrooms, and hard-to-reach areas for a fresh start.',
    shortDescription: 'A thorough reset for your space.',
    image: '/deep-cleaning-service.jpg',
  },
  {
    name: 'move',
    label: 'Move In/Out',
    description:
      'We help make move-in and move-out transitions easier with detailed cleaning that leaves properties ready for the next step.',
    shortDescription: 'Clean, polished transitions for every move.',
    image: '/move-service.jpg',
  },
  {
    name: 'post-construction',
    label: 'Post-Construction',
    description:
      'Our post-construction cleaning removes dust, debris, and residue so newly finished spaces are ready to enjoy.',
    shortDescription: 'Finishing touches for newly completed projects.',
    image: '/post-construction-service.jpg',
  },
  {
    name: 'special',
    label: 'Special Services',
    description:
      'We offer additional cleaning support for unique needs, seasonal projects, and one-time requests.',
    shortDescription: 'Flexible help for special cleaning needs.',
    image: '/special-services.jpg',
  },
];
