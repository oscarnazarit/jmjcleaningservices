import { serviceTypes, type Service } from '@/app/constants';

export default function TabContents({ service }: { service: string }) {
  const selectedService = serviceTypes.find((item: Service) => item.name === service);
  const label = selectedService?.label ?? service;

  return <>{`This is ${service} which has label ${label}`}</>;
}
