import { Heart } from "lucide-react";
import { footerData } from "@/lib/data";

export default function Footer() {
  return (
    <section className='container mx-auto px-4 pt-6 pb-12'>
      <div className='mx-auto max-w-4xl'>
        <footer className='mt-16 text-center'>
          <div className='mx-4 rounded-2xl bg-white/60 p-8 backdrop-blur-sm'>
            <p className='mb-4 font-serif text-2xl text-gray-700'>
              {`"${footerData.quote}"`}
            </p>
            <p className='text-gray-600 italic'>{footerData.subquote}</p>
            <div className='mt-6 flex justify-center'>
              <Heart className='size fill-rose-400 text-rose-400' />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
