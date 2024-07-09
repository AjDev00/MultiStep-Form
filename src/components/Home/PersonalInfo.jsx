export default function PersonalInfo() {
  return (
    <div>
      <div className="font-bold rounded-md border border-white bg-white px-5 py-10 w-80 absolute top-32 right-5">
        <h4 className="text-2xl mb-2">Personal Info</h4>
        <p style={{ fontSize: "18px" }} className="opacity-70 mb-4">
          Please provide your name, email, address and phone number.
        </p>
        <div className="flex flex-col">
          <span>Name</span>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className="border border-slate-300 p-2 rounded-sm mb-4"
          />
          <span>Email Address</span>
          <input
            type="text"
            placeholder="e.g. stephenking@gmail.com"
            className="border border-slate-300 p-2 rounded-sm mb-4"
          />
          <span>Phone Number</span>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className="border border-slate-300 p-2 rounded-sm mb-4"
          />
        </div>
      </div>
    </div>
  );
}
