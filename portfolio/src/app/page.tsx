import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-lexend)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-amberWhite text-8xl text-shadow-md"> Hi there!</h1>
        <p>I'm a software developer based in New York City.</p>
        <p>I've put this site together to show off a bit of my work,</p>
        <p>and have a space to host some of the cool projects I've built.</p>
        <p>I hope you like it!</p>
      </main>
      
    </div>
  );
}
