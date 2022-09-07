import styles from "./styles.module.css";
import Router from "next/router";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Breadcrumb = (props: any) => {
  const breadcrumbStyle =
    styles.breadcrum + (props.little ? " " + styles.little : "");

  const ArrowStyle = {
    fontSize: props.little ? "0.8rem" : "1rem",
    color: "rgb(180,180,180)",
  };

  return (
    <div className={styles.breadcrumContainer}>
      <Link href="/goals">
        <span className={breadcrumbStyle}>Goals</span>
      </Link>

      {props.elements.map((element: any) => {
        return (
          <>
            <ArrowForwardIosIcon sx={ArrowStyle} />
            <Link href={"/goals/" + element.id}>
              <span className={breadcrumbStyle}>{element.title}</span>
            </Link>
          </>
        );
      })}
    </div>
  );
};
export default Breadcrumb;
