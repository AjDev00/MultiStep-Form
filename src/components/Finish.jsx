import FinishBtn from "./Finish/FinishBtn";
import FinishPage from "./Finish/FinishPage";

export default function Finish() {
  return (
    <div>
      <div className="bg-mobileHomeBgImage bg-cover w-full h-60 bg-center">
        <FinishBtn />
        <FinishPage />
      </div>
    </div>
  );
}
