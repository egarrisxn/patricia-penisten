import { Heart } from "lucide-react";
import { footerData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className='bg-linear-to-r from-rose-100 to-blue-100 px-4 py-16 text-center'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-6 flex justify-center'>
          <div className='rounded-full bg-white p-4 shadow-lg'>
            <Heart className='size-6 fill-rose-500 text-rose-500' />
          </div>
        </div>
        <p className='mb-4 text-xl font-light text-gray-700'>
          {`"${footerData.quote}"`}
        </p>
        <p className='text-gray-500'>{footerData.subquote}</p>
      </div>
    </footer>
  );
}
