import { formatter } from "@/utils/formatter";

export default function Nav() {
  return (
    <div>
      <div className="flex gap-10">
        <img className="" alt="logo" />
        <br />

        <h1>{formatter.format(new Date())}</h1>
      </div>
    </div>
  );
}
