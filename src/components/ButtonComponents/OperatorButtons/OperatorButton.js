import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <>
      <button className='OperatorButton' onClick={() => props.addOperator(props.operator.value)}>
        {props.operator.char}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;