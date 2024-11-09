import {
  hideSideBarHandler,
  scrollHandler,
  showSideBarHandler,
} from "./handler";
import { hideSideBar, showSideBar } from "./selectors";

const listener = () => {
  showSideBar.addEventListener("click", showSideBarHandler);
  hideSideBar.addEventListener("click", hideSideBarHandler);
  addEventListener("scroll", scrollHandler);
};

export default listener;
