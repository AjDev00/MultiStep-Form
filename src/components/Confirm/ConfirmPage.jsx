import thankYou from "../../assets/images/icon-thank-you.svg";

export default function ConfirmPage() {
  return (
    <div>
      <div className="border border-white bg-white p-4 w-80 ml-5 py-16 min-[414px]:py-20 px-5 rounded-md min-[375px]:ml-9 min-[414px]:ml-12 min-[414px]:h-[450px] shadow-lg mt-12">
        <div className="items-center justify-center flex mb-4">
          <img src={thankYou} alt="" className="w-14 h-14" />
        </div>
        <div
          style={{ fontSize: "17px" }}
          className="flex flex-col justify-center items-center"
        >
          <h4 className="font-bold text-blue-950 text-2xl mb-4">Thank you!</h4>
          <div className="font-semibold opacity-45 text-center">
            Thanks for confirming your subscription!
          </div>
          <div className="font-semibold opacity-45 text-center">
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
          </div>
        </div>
      </div>
    </div>
  );
}
