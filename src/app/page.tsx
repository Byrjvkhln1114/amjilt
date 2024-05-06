import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center   p-24 gap-5">
      <h1 className="text-xl">2022-2024 Төслүүд:</h1>
      <a
        href="
        https://tusul-jade.vercel.app/
      "
        target="_blank"
      >
        <div className="border border w-[76vw] rounded-md">
          <img src="tusul.png" alt="" />
          <div className="mt-4 mb-4">Web-Global Youth Entrepreneurship:</div>
        </div>
      </a>

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
      <a
        href="
        https://kicksense-6d323.firebaseapp.com/
      "
        target="_blank"
      >
        <div className="border border w-[76vw] rounded-md">
          <img src="kicksense.png" alt="" />
          <div className="mt-4 mb-4">Web-Kicksense </div>
        </div>
      </a>
      <a
        href="
        https://valedit.vercel.app/
      "
        target="_blank"
      >
        <div className="border border w-[76vw] rounded-md">
          <img src="valedit.png" alt="" />
          <div className="mt-4 mb-4">Web-Valorant account collection edit</div>
        </div>
      </a>
      <a
        href="
        https://amarhanfizik-72148.web.app/
      "
        target="_blank"
      >
        <div className="border border w-[76vw] rounded-md">
          <img src="amarhanfizik.png" alt="" />
          <div className="mt-4 mb-4">Web-Амархан физик:</div>
        </div>
      </a>
      <a
        href="
        https://ecoshidelplastick-33b12.web.app/
      "
        target="_blank"
      >
        <div className="border border w-[76vw] rounded-md">
          <img src="eco.png" alt="" />
          <div className="mt-4 mb-4">Web-Эко шийдэл компанид зориулж хийсэн</div>
        </div>
      </a>
    </main>
  );
}
