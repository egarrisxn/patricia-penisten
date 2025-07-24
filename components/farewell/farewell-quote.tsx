const farewellQuoteText = [
  "A life beautifully lived, and a legacy of love that will forever remain in our hearts.",
];

export default function FarewellQuote() {
  return (
    <div className='w-full px-8 md:mx-auto md:max-w-xs md:pt-4 lg:max-w-sm'>
      <p className='text-accent-foreground/90 text-2xl italic md:mx-auto md:text-center md:text-2xl lg:text-3xl'>
        <q>{farewellQuoteText}</q>
      </p>
    </div>
  );
}
