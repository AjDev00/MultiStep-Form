import AddOnsBtn from "./AddOns/AddOnsBtn";
import AddOnsMonthly from "./AddOns/AddOnsMonthly";

export default function AddOns() {
  return (
    <div>
      <div className="bg-mobileHomeBgImage bg-cover w-full h-60 bg-center">
        <AddOnsBtn />
        <AddOnsMonthly />
      </div>
    </div>
  );
}
