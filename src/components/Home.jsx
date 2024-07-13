import HomeButtons from "./Home/HomeButtons";
import PersonalInfo from "./Home/PersonalInfo";

export default function Home() {
  return (
    <div className="md:flex flex-row md:justify-center md:items-center md:border md:border-white md:bg-white md:w-[950px] md:ml-48 md:rounded-lg md:shadow-2xl md:mt-20 md:py-2">
      <div className="bg-mobileHomeBgImage bg-cover w-full h-60 bg-center md:bg-desktopHomeBgImage md:h-[500px] md:w-60 md:rounded-md md:ml-[-540px]">
        <HomeButtons />
      </div>
      <div className="md:">
        <PersonalInfo />
      </div>
    </div>
  );
}
