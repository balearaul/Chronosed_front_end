import style from "./HourSlider.module.css";
import { useState, useRef, useEffect } from "react";

export const HourSlider = (props: any) => {
  const thumbVisibileClass = style.hiddenThumb;

  const AMRef: any = useRef(null);
  const PMRef: any = useRef(null);

  useEffect(() => {
    if (props.value >= 12) {
      AMRef.current.classList.add(thumbVisibileClass);
      PMRef.current.classList.remove(thumbVisibileClass);
    } else {
      AMRef.current.classList.remove(thumbVisibileClass);
      PMRef.current.classList.add(thumbVisibileClass);
    }
  }, [props.value]);

  const handleAMFocus = (e: any) => {
    props.onChange(e);
    AMRef.current.classList.remove(thumbVisibileClass);
    PMRef.current.classList.add(thumbVisibileClass);
  };

  const handlePMFocus = (e: any) => {
    props.onChange(e);
    AMRef.current.classList.add(thumbVisibileClass);
    PMRef.current.classList.remove(thumbVisibileClass);
  };

  const valuesAM = (
    <>
      <div className={style.indicator}>0</div>
      <div className={style.indicator}>1</div>
      <div className={style.indicator}>2</div>
      <div className={style.indicator}>3</div>
      <div className={style.indicator}>4</div>
      <div className={style.indicator}>5</div>
      <div className={style.indicator}>6</div>
      <div className={style.indicator}>7</div>
      <div className={style.indicator}>8</div>
      <div className={style.indicator}>9</div>
      <div className={style.indicator}>10</div>
      <div className={style.indicator}>11</div>
      <div className={style.indicator}>AM</div>
    </>
  );
  const valuesPM = (
    <>
      <div className={style.indicator}>12</div>
      <div className={style.indicator}>13</div>
      <div className={style.indicator}>14</div>
      <div className={style.indicator}>15</div>
      <div className={style.indicator}>16</div>
      <div className={style.indicator}>17</div>
      <div className={style.indicator}>18</div>
      <div className={style.indicator}>19</div>
      <div className={style.indicator}>20</div>
      <div className={style.indicator}>21</div>
      <div className={style.indicator}>22</div>
      <div className={style.indicator}>23</div>
      <div className={style.indicator}>PM</div>
    </>
  );

  return (
    <>
      <div className={style.hrContainer}>
        <input
          min={0}
          max={11.99}
          step={props.step}
          value={props.value}
          className={[style.input, style.hiddenThumb].join(" ")}
          type="range"
          onChange={handleAMFocus}
          // onFocus={handleAMFocus}
          ref={AMRef}
        />
        <div className={style.valuesContainer}>{valuesAM}</div>
        <input
          min={12}
          max={23.99}
          step={props.step}
          value={props.value}
          className={style.input}
          type="range"
          onChange={handlePMFocus}
          ref={PMRef}
        />
        <div className={style.valuesContainer}>{valuesPM}</div>
      </div>
    </>
  );
};

export default HourSlider;
