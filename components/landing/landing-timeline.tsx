import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CONTAINER_FADE_N_STAGGER, ITEM_FADE } from "@/lib/motion";
import {
  landingTimelineTextBlurbs,
  landingTimelineTeacherCard,
  landingTimelineData,
} from "@/lib/data";

export default function LandingTimeline() {
  return (
    <motion.div
      variants={CONTAINER_FADE_N_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: "some" }}
      className='xs:px-4 grid items-start gap-16 px-2 py-8 lg:grid-cols-2 lg:gap-12 xl:gap-16'
    >
      <div className='space-y-12'>
        <motion.div variants={ITEM_FADE}>
          <Card className='lg:bg-card/90 rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-xl xl:py-12'>
            <CardContent className='xs:px-4 space-y-6 px-2 xl:px-6'>
              <p className='text-base md:text-lg'>
                {landingTimelineTextBlurbs}
              </p>
              <p className='text-base md:text-lg'>
                Here is the link to Patricia&apos;s{" "}
                <a
                  href='https://www.grayfuneral.com/obituaries/Patricia-G-Penisten?obId=42802528'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group hover:text-primary relative cursor-pointer font-medium transition-colors'
                >
                  Official Obituary
                  <span className='bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
                </a>{" "}
                courtesy of the lovely folks over at Lawton Ritter Gray Funeral
                Home.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={ITEM_FADE}>
          <Card className='lg:bg-card/90 rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-xl xl:py-10'>
            <div className='xs:px-4 px-2 xl:px-6'>
              <h4 className='xs:text-lg flex items-center text-xl leading-none font-semibold md:text-2xl'>
                <Star className='xs:size-6 text-primary fill-primary/50 mr-2.5 size-5 md:size-7' />
                {landingTimelineTeacherCard.title}
              </h4>
            </div>
            <CardContent className='xd:px-4 px-2 xl:px-6'>
              <p className='text-base md:text-lg'>
                {landingTimelineTeacherCard.body}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className='space-y-6 px-2 lg:px-0'>
        <motion.h4
          variants={ITEM_FADE}
          className='mb-6 text-lg font-bold md:text-3xl'
        >
          Timeline
        </motion.h4>
        <div className='space-y-6 lg:space-y-7'>
          {landingTimelineData.map((event, index) => (
            <motion.div
              key={index}
              className='flex items-start space-x-3 md:space-x-4'
              variants={ITEM_FADE}
            >
              <div className='from-primary flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-amber-500 shadow-lg md:size-20'>
                <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white md:text-sm'>
                  {event.year}
                </span>
              </div>
              <div className='flex-1'>
                <h5 className='text-accent-foreground text-[1rem] font-medium tracking-tight md:text-xl md:leading-snug md:tracking-normal'>
                  {event.title}
                </h5>
                <p className='text-[0.85rem] tracking-tight md:text-lg md:leading-snug md:tracking-normal'>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// import * as motion from "motion/react-client";
// import { Star } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { CONTAINER_VARIANT_STAGGER, ITEM_VARIANT } from "@/lib/motion";
// import {
//   landingTimelineTextBlurbs,
//   landing,
//   timelineData,
// } from "@/lib/data";

// export default function LandingTimeline() {
//   return (
//     <div className='pt-6 pb-8 md:px-4 md:pt-8'>
//       <motion.div
//         className='grid items-start gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-16'
//         variants={CONTAINER_VARIANT_STAGGER}
//         initial='hidden'
//         whileInView='visible'
//         viewport={{ once: true, amount: "some" }}
//       >
//         <div className='space-y-12'>
//           <motion.div variants={ITEM_VARIANT}>
//             <Card className='lg:bg-card/90 rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-xl xl:py-10'>
//               <CardContent className='px-2 lg:px-4 xl:px-6'>
//                 {landingTimelineTextBlurbs.map((text, index) => (
//                   <p key={index} className='py-2 md:text-lg'>
//                     {text}
//                   </p>
//                 ))}
//               </CardContent>
//             </Card>
//           </motion.div>
//           <motion.div variants={ITEM_VARIANT}>
//             <Card className='lg:bg-card/90 rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-xl xl:py-10'>
//               <div className='px-2 lg:px-4 xl:px-6'>
//                 <h4 className='xs:text-lg flex items-center text-xl leading-none font-semibold md:text-2xl'>
//                   <Star className='xs:size-6 text-primary fill-primary/50 mr-2.5 size-5 md:size-7' />
//                   {landing.title}
//                 </h4>
//               </div>
//               <CardContent className='px-2 lg:px-4 xl:px-6'>
//                 <p className='text-base md:text-lg'>{landing.body}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//         <div className='space-y-6 px-2 lg:px-0'>
//           <motion.h4
//             variants={ITEM_VARIANT}
//             className='mb-6 text-lg font-bold md:text-3xl'
//           >
//             Timeline
//           </motion.h4>
//           <div className='space-y-6 lg:space-y-7'>
//             {timelineData.map((event, index) => (
//               <motion.div
//                 key={index}
//                 className='flex items-start space-x-3 md:space-x-4'
//                 variants={ITEM_VARIANT}
//               >
//                 <div className='from-primary flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-amber-500 shadow-lg md:size-20'>
//                   <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white md:text-sm'>
//                     {event.year}
//                   </span>
//                 </div>
//                 <div className='flex-1'>
//                   <h5 className='text-accent-foreground text-[1rem] font-medium tracking-tight md:text-xl md:leading-snug md:tracking-normal'>
//                     {event.title}
//                   </h5>
//                   <p className='text-[0.85rem] tracking-tight md:text-lg md:leading-snug md:tracking-normal'>
//                     {event.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
