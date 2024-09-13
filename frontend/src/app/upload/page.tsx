import NavBar from "../components/NavBar";
import Image from "next/image";
import UploadManga from "../components/UploadManga";
import Instructions from "../components/Instructions";

export default function Page() {
  return (
    <header className="relative">
      <div className="relative h-1/3">
        <div className="h-96 p-56">
          <Image
            src="/images/animebanner.jpg"
            layout="fill"
            alt="Picture of the author"
            className="opacity-25 w-full"
          />
        </div>
        <div className="absolute inset-0 flex-col justify-center items-center text-white text-center">
          <NavBar containerStyles=" bg-darkBlue p-5" />
          <h1 className="mt-48 text-3xl">Upload your favourite manga panels</h1>
          <h1 className="text-3xl">
            and <strong className="font-GothamBold">TRANSLATE</strong> for your
            liking
          </h1>
          <UploadManga />
        </div>
      </div>
      <div className="relative z-10 -mt-8 flex justify-center">
        <div className="bg-lightBlue w-full max-w-7xl p-6 rounded-lg">
          <Instructions />
        </div>
      </div>
    </header>
  );
}
