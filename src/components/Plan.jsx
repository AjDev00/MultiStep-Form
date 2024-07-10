import PlanButtons from "./Plan/PlanButtons";
import PlanInfo from "./PlanMonthlyInfo";

export default function Plan() {
  return (
    <div>
      <div className="bg-mobileHomeBgImage bg-cover w-full h-60 bg-center">
        <PlanButtons />
        <PlanInfo />
      </div>
    </div>
  );
}
