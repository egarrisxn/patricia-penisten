import Link from "next/link";

export default function TimelinePage() {
  return (
    <div className='mx-auto grid h-screen w-full place-items-center'>
      <section className='flex gap-4'>
        <Link href='/timeline/1'>Timeline 1</Link>
        <Link href='/timeline/2'>Timeline 2</Link>
      </section>
    </div>
  );
}
