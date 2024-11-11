import {
  navi,
  naviLi,
  sideBar,
  svgBtn,
} from "./selectors";

export const showSideBarHandler = () => {
  document.body.classList.add("overflow-hidden");
  sideBar.classList.add("duration-300");
  sideBar.classList.remove("translate-x-full");
};

export const hideSideBarHandler = () => {
  sideBar.classList.add("translate-x-full");
  document.body.classList.remove("overflow-hidden");
};

export const scrollHandler = () => {
  if (scrollY >= 30) {
    svgBtn.classList.remove("stroke-white");
    svgBtn.classList.add("stroke-stone-700");
    navi.classList.add(
      "duration-300",
      "bg-white",
      "border-b-2",
      "border-b-yellow-400"
    );
    naviLi.classList.add("text-stone-700");
  } else {
    svgBtn.classList.add("stroke-white");
    svgBtn.classList.remove("stroke-stone-700");
    navi.classList.remove("bg-white", "border-b-2", "border-b-yellow-400");
    naviLi.classList.remove("text-stone-700");
  }
};
