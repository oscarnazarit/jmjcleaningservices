export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden w-full">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'url("/dsm_services_pic.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
        <div className="relative container mx-auto max-w-6xl pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-36 pl-2 px-2">
          <div className="h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="max-w-xl flex-1 order-2 md:order-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}
