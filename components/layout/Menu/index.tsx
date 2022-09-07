import styles from "./styles.module.css";

import MenuItem from "./MenuItem";
import AdjustIcon from "@mui/icons-material/Adjust";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useSelector } from "react-redux";

const Menu = () => {
  const menuIsOpen = useSelector((state: any) => state.menu.open);
  const menuStyle = menuIsOpen
    ? styles.menu + " " + styles.active
    : styles.menu;

  return (
    <>
      <div className={menuStyle}>
        <MenuItem
          icon={<AdjustIcon sx={{ fontSize: "30px" }} />}
          text={"Goals"}
          href="/goals"
        />

        <MenuItem
          icon={<AccessTimeIcon sx={{ fontSize: "30px" }} />}
          text={"Time"}
          href="/time"
        />
      </div>
    </>
  );
};

export default Menu;
