import Header from "@/components/shared/header";

export default function PageSection({
  id,
  title,
  heading,
  description,
  className,
  children,
}: {
  id: string;
  title?: string;
  heading?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className='mx-auto grid min-h-screen w-full place-items-center py-24 xl:pt-32 xl:pb-28'
    >
      <div
        className={`${className} mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8`}
      >
        <Header
          title={title || ""}
          heading={heading || ""}
          description={description || ""}
        />
        {children}
      </div>
    </section>
  );
}
