// import { useFavorite } from "@/app/services/zustand";

export function Star() {
  // const fav = useFavorite((state) => state.favortied);
  // const favorited = useFavorite((state) => state.setFavorited);

  return (
    <>
      <svg
        // onClick={favorited}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        className="w-5 h-5 cursor-pointer"
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </>
  );
}
