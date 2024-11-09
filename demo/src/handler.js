import { navi, naviLi, showSideBar, sideBar, svgBtn } from "./selectors";

export const showSideBarHandler = () => {
  document.body.classList.add('overflow-hidden');
  sideBar.classList.add("duration-300");
  sideBar.classList.remove("translate-x-full");
};

export const hideSideBarHandler = () => {
  sideBar.classList.add("translate-x-full");
  document.body.classList.remove('overflow-hidden');
};

export const scrollHandler = () => {
  const lastScrollPostition = window.scrollY;

  if (lastScrollPostition >= 30) {
    navi.classList.add("duration-300", "bg-white");
    naviLi.classList.add("text-stone-700");
    svgBtn.classList.add("stroke-stone-700");
  } else {
    navi.classList.remove("bg-white");
    naviLi.classList.remove("text-stone-700");
    svgBtn.classList.remove("stroke-stone-700");
  }
};
