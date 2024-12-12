import ProjectSlider from "@/components/ProjectSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-lexend)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <article className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
          <h1 className="text-amberWhite text-8xl text-shadow-md"> Hi there!</h1>
          <p className="max-w-lg leading-relaxed text-lg">I'm a software developer based in New York City. I've put this site together to show off a bit of my work,and have a space to host some of the cool projects I'm building.</p>
          <p className="self-start">I hope you like it!</p>
        </article>
        <ProjectSlider />
      </main>

    </div>
  );
}
