import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 lg:p-24">
      <header className="w-full max-w-6xl flex flex-col items-center justify-between font-mono text-sm lg:flex-row lg:items-center lg:justify-between">
        <p className="flex w-full justify-center lg:w-auto lg:justify-start border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 lg:border lg:bg-gray-200 lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 lg:dark:bg-zinc-800/30 backdrop-blur-2xl">
          Anti-Bot Application&nbsp;
          <code className="font-bold">src/app/page.tsx</code>
        </p>
        <a
          className="flex items-center gap-2 p-8 lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By BARK Protocol
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </header>

      <section className="relative flex items-center my-16 lg:my-32">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="absolute h-[300px] w-full -translate-x-1/2 bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10 sm:w-[480px] lg:h-[360px]" />
        <div className="absolute h-[180px] w-full translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40 sm:w-[240px]" />
      </section>

      <section className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-8 mb-32 lg:mb-0">
        <Card
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Docs"
          description="Welcome to the Solana Token with Anti-Bot. Generate a token on the Solana blockchain with an integrated anti-bot mechanism to ensure a fair token launch and distribution."
        />
        <Card
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          title="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
        />
        <Card
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Anti-Bot"
          description="Anti-Bot, the Solana Token with an Anti-Bot mechanism. This application allows you to generate a token on the Solana blockchain with an integrated anti-bot mechanism to ensure a fair token launch and distribution."
        />
        <Card
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Deploy"
          description="Welcome to the Solana Token with Anti-Bot. Generate a token on the Solana blockchain with an integrated anti-bot mechanism to ensure a fair token launch and distribution."
        />
      </section>
    </main>
  );
}

function Card({ href, title, description }) {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30 shadow-md hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-75">
        {description}
      </p>
    </a>
  );
}
