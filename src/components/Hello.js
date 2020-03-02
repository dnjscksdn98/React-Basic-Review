import React from "react";

function Hello(props) {
  const { name, age, isSpecial } = props;
  return (
    <React.Fragment>{isSpecial && <div>{name} is special</div>}</React.Fragment>
  );
}

export default Hello;
