import { farewellQuoteText } from "@/lib/data";

export default function FarewellQuote() {
  return (
    <div className='w-full px-8 md:mx-auto md:max-w-xs md:pt-4 lg:max-w-sm'>
      <p className='text-accent-foreground/90 text-2xl italic md:mx-auto md:text-center lg:text-3xl'>
        <q>{farewellQuoteText}</q>
      </p>
    </div>
  );
}
