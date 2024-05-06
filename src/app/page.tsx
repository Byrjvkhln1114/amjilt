import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center   p-24 gap-5">
      <h1 className="text-xl">2022-2024 Төслүүд:</h1>
      <a
        href="
        https://paper-rock-scissors-rouge.vercel.app/single
      "
        target="_blank"
      >
        <div className="border border w-[76vw] rounded-md">
          <img src="rock-paper-scissor.png" alt="" />
          <div className="mt-4 mb-4">ТОГЛООМ-Хайч чулуу даавуу</div>
        </div>
      </a>
    </main>
  );
}
