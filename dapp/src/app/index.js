import Image from "next/image";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <div className="flex flex-col min-h-screen bg-dark-gray text-white">
      <header className="w-full py-4 px-8 flex items-center justify-between bg-black shadow-md">
        <div className="flex items-center">
          <Image src="/logo.png" alt="BARK Protocol Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold text-orange-500">BARK Protocol</span>
        </div>
        <div>
          <WalletMultiButton />
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Anti-Bot Application</h1>
        <p className="text-xl mb-8">Welcome to the Solana Token with Anti-Bot. Generate a token on the Solana blockchain with an integrated anti-bot mechanism to ensure a fair token launch and distribution.</p>
        <button className="mt-8 px-6 py-2 text-lg font-semibold text-black bg-orange-500 rounded-lg hover:bg-orange-700">
          Get Started
        </button>
      </main>

      <footer className="w-full py-4 bg-black flex justify-center">
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <Image src="/discord.svg" alt="Discord" width={24} height={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
