import { useState } from "react";

function Laptop(props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={handleClick}>{show ? "show less" : "show more"}</button>
      {show ? (
        <div>
          <p>brand : {props.brand}</p>
          <p>weigth: {props.weigth} kg</p>
        </div>
      ) : null}
    </div>
  );
}

export default Laptop;
