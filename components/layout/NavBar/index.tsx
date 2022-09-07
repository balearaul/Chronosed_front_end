import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { toggleMenu } from "store/slices/menu";

import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../NavBar/Logo";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleMenuButtonClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.menuButton} onClick={handleMenuButtonClick}>
          <MenuIcon fontSize="large" />
        </div>
        <Logo />
      </div>
    </>
  );
};

export default NavBar;
