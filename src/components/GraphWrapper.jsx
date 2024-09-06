import { useRef } from "react";

const GraphWrapper = ({ children, type, handleTypeChange }) => {
  const ref = useRef(null);
  const btnRef = useRef(null);
  const handleClick = () => {
    if (ref.current) {
      if (
        ref.current.style.placeItems === "center" &&
        btnRef.current.innerText === "Start"
      ) {
        ref.current.style.placeItems = "start";
        btnRef.current.innerText = "Center";
      } else {
        ref.current.style.placeItems = "center";
        btnRef.current.innerText = "Start";
      }
    }
  };

  return (
    <div className="graph-wrapper">
      {type && (
        <div className="chartType-div">
          {type.map((t, i) => (
            <button key={i} onClick={handleTypeChange}>
              {t}
            </button>
          ))}
        </div>
      )}
      <div ref={ref} className="graph-wrapper-div">
        <div className="graph-div">
          {children}
          <button ref={btnRef} onClick={handleClick} className="graph-btn">
            Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphWrapper;
