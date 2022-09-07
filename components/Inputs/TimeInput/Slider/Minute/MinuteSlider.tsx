import style from "./../Slider.module.css";

export const MinuteSlider = (props: any) => {
  const values = (
    <>
      <div className={style.indicator}>0</div>
      <div className={style.indicator}>5</div>
      <div className={style.indicator}>10</div>
      <div className={style.indicator}>15</div>
      <div className={style.indicator}>20</div>
      <div className={style.indicator}>25</div>
      <div className={style.indicator}>30</div>
      <div className={style.indicator}>35</div>
      <div className={style.indicator}>40</div>
      <div className={style.indicator}>45</div>
      <div className={style.indicator}>50</div>
      <div className={style.indicator}>55</div>
      <div className={style.indicator}></div>
    </>
  );

  return (
    <>
      <div className={style.minContainer}>
        <input
          min={0}
          max={props.max}
          step={props.step}
          value={props.value}
          className={[style.input].join(" ")}
          type="range"
          onChange={props.onChange}
        />
        <div className={style.valuesContiner}>{values}</div>
      </div>
    </>
  ) as any;
};
