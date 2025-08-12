import { WordRotate } from "@/components/ui/word-rotate";

export default function TextRotate() {
  return (
    <div className='flex flex-row'>
      <span>Pat, or commonly known as </span>
      <div className='text-accent-foreground justify-center overflow-hidden pl-1 font-medium lg:pl-2'>
        <WordRotate
          words={[
            "Patricia",
            "Mrs Penisten",
            "Patsy",
            "Patsy Geraldine",
            "Grandma",
            "Grandma Pat",
          ]}
        />
      </div>
    </div>
  );
}
