import styles from "./styles.module.css";
import NavBar from "./NavBar";
import Menu from "./Menu";

import { useSelector } from "react-redux";

const Layout = ({ children }: any) => {
  const menuIsOpen = useSelector((state: any) => state.menu.open);
  const layoutStyle = menuIsOpen
    ? styles.layoutChildrenOpen
    : styles.layoutChildren;

  return (
    <div className={styles.layout}>
      <NavBar />
      <div className={styles.menuContainer}>
        <Menu />
        <div className={layoutStyle}>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
