import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";

// Redux
import { RootState } from "store/store";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import { showCreateModal, hideCreateModal } from "store/slices/creatingGoal";

function Modal(props: any) {
  // Redux
  // const createModalIsVisible = useSelector(
  //   (state: RootState) => state.createModalVisible.createModalIsVisible
  // );
  const dispatch = useDispatch();

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const CloseButton = () => {
    return (
      <>
        <button
          onClick={() => {
            // dispatch(hideCreateModal());
          }}
          className={styles.close_button}
        >
          X
        </button>
      </>
    );
  };

  const ModalModalBackground = () => {
    return (
      <>
        <div
          onClick={() => {
            // dispatch(hideCreateModal());
          }}
          className={styles.background}
        ></div>
      </>
    );
  };

  const modalContent = () => {
    return (
      <>
        <ModalModalBackground />
        <div className={styles.modal}>
          <CloseButton />
          {props.children}
        </div>
      </>
    );
  };

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent(),
      document.getElementById("modal-root") as HTMLElement
    );
  } else {
    return null;
  }
}

export default Modal;
