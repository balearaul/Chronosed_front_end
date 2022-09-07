import styles from "./Create.module.css";

import { useSelector, useDispatch } from "react-redux";
import { startCreatingGoal, stopCreatingGoal } from "store/slices/creatingGoal";
import { RootState } from "store/store";

const Create = (props: any) => {
  const dispatch = useDispatch();
  const isCreatingGoal = useSelector(
    (state: RootState) => state.creatingGoal.isCreatingGoal
  );
  if (isCreatingGoal) {
    return null;
  }

  // Handling click on "create new goal" button
  const handleCreateClick = () => {
    dispatch(startCreatingGoal());
  };

  return (
    <div className={styles.create_container}>
      <div className={styles.width_90}>
        <div className={styles.create} onClick={handleCreateClick}>
          +
        </div>
      </div>
    </div>
  );
};

export default Create;
