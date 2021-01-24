import React from "react";
import { CustomInput } from "reactstrap";

const SwitchButton = () => {
  return (
    <CustomInput
      type="switch"
      id="exampleCustomSwitch"
      name="customSwitch"
      label="Turn on this custom switch"
    />
  );
};

export default SwitchButton;
