import FinishBtn from "./Finish/FinishBtn";
import FinishPage from "./Finish/FinishPage";

export default function Finish() {
  return (
    <div className="md:border md:border-white md:bg-white md:w-[950px] md:ml-48 md:rounded-lg md:shadow-2xl md:mt-20 md:py-2">
      <div className="bg-mobileHomeBgImage bg-cover w-full h-60 bg-center md:bg-desktopHomeBgImage md:h-[500px] md:w-60 md:rounded-md md:flex flex-row md:gap-24 md:ml-3">
        <FinishBtn />
        <FinishPage />
      </div>
    </div>
  );
}
