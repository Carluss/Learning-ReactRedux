import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, dlabel }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const renderedOptions = options.map((option) => {
    /*  Return null in react means to render nothing 
        so if this peace of code were active it would not show the
        selected option in the dropdown menu.
    if (option.value === selected.value) {
      return null;
    }*/
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">Select {dlabel}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>

      {dlabel === "color" ? (
        <div>
          <p />
          <div className="ui message">
            <div className="header">{dlabel} change</div>
            <p style={{ color: `${selected.value}` }}>
              The color of this text will change depending on the color you
              pick.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
