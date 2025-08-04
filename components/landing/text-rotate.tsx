import { WordRotate } from "@/components/shared/word-rotate";

export default function TextRotate() {
  return (
    <>
      <span className='text-foreground/70 pt-2'>*commonly referred to as:</span>
      <div className='text-accent-foreground justify-center overflow-hidden px-1.5'>
        <WordRotate
          words={[
            "Pat",
            "Patsy",
            "Patsy Geraldine",
            "Patricia",
            "Mrs Penisten",
            "Grandma Pat",
            "Grandma",
            "Mom",
          ]}
        />
      </div>
    </>
  );
}
