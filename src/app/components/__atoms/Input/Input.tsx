import { useSearchValue } from "@/app/services/zustand";
import SearchIc from "../../Icons/searchIc";

function Input() {
  const change = useSearchValue((state) => state.setSearchValue);

  return (
    <>
      <form
        className={`shadow-lg max-w-[480px] w-full h-[56px] bg-white"
            pl-[32px] pr-[32px] flex items-center gap-[24px] border border-[#727280] rounded-[6px] `}
      >
        <SearchIc />
        <input
          onChange={(e) => change(e.currentTarget.value)}
          placeholder="Search for a coin…"
          className={` focus:outline-none w-full text-[14px] font-normal text-black`}
          type="text"
        />
      </form>
    </>
  );
}
export default Input;
