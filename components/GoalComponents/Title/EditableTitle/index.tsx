import styles from "./styles.module.css";
import { useRef, useEffect } from "react";
import useUpdateData from "hooks/useUpdateData";
import debounce from "helpers/debounce";

const EditableTitle = (props: any) => {
  const { setTitle } = props;
  const { mutate: updateTitle } = useUpdateData(props.revalidate);

  const titleRef: any = useRef("");

  useEffect(() => {
    // Focus on title input

    if (props.focusTitle) {
      titleRef.current.focus();
    }
  }, []);

  const blur = () => {
    if (props.updating) {
      // handleTitleUpdate();
      const titleValue = titleRef.current.innerText;
      setTitle(titleValue);
    }
  };

  const handleTitleUpdate = () => {
    const titleValue = titleRef.current.innerText;
    const idValue = props.id;
    updateTitle({ updatedData: { title: titleValue }, id: idValue });
  };

  const debounceAndUpdateTitle = debounce(handleTitleUpdate);
  const onInput = props.updating
    ? debounceAndUpdateTitle
    : () => {
        props.onChange(titleRef.current.innerText);
      };

  const small = props.small ? styles.small : "";

  return (
    <h2
      ref={titleRef}
      onBlur={blur}
      onInput={onInput}
      className={styles.title + " " + small}
      contentEditable
      data-placeholder="Title"
      suppressContentEditableWarning={true}
    >
      {props.title}
    </h2>
  );
};

export default EditableTitle;
