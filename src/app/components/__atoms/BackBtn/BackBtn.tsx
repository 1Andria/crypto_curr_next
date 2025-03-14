import Link from "next/link";
import { Arrow } from "../../Icons/Arrow";

const BackBtn = () => {
  return (
    <>
      <Link
        href="/"
        className={`shadow-lg mt-[30px] border-[1px] border-black w-[136px] h-[40px] flex  items-center justify-center gap-[8px] rounded-[6px] `}
      >
        <Arrow />
        <h4 className={`font-semibold text-[16px] text-black `}>Back</h4>
      </Link>
    </>
  );
};

export default BackBtn;
