import ConfirmBtn from "./Confirm/ConfirmBtn";
import ConfirmPage from "./Confirm/ConfirmPage";

export default function Confirm() {
  return (
    <div>
      <div className="bg-mobileHomeBgImage bg-cover w-full h-60 bg-center">
        <ConfirmBtn />
        <ConfirmPage />
      </div>
    </div>
  );
}
