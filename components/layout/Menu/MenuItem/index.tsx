import Link from "next/link";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "store/slices/menu";

const MenuItem = (props: any) => {
  const dispatch = useDispatch();

  const handleMenuButtonClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <Link href={props.href} key="goals">
        <div className={styles.menu_item} onClick={handleMenuButtonClick}>
          <div className={styles.menu_item_icon}>{props.icon}</div>
          <div className={styles.menu_item_text}>{props.text}</div>
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
