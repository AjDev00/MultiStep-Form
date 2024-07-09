import HomeButtons from "./Home/HomeButtons";
import PersonalInfo from "./Home/PersonalInfo";

export default function Home() {
  return (
    <div>
      <div className="bg-mobileHomeBgImage bg-cover w-full h-60 bg-center">
        <HomeButtons />
      </div>
      <div>
        <PersonalInfo />
      </div>
    </div>
  );
}
