import style from "./Slider.module.css";

export const Slider = (props: any) => {
  let values: any = [];

  if (props.type === "hour") {
    values = (
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
        <div className={style.indicator}></div>
      </>
    );
  }

  if (props.type === "minute") {
    values = (
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
  }
  return (
    <>
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
    </>
  ) as any;
};
