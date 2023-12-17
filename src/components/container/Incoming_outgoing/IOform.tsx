import "./IOform.css";

import { Button, TextInput } from "../..";

export const IOform = () => {
  const InputStyle = {
    height: 50,
    marginRight: 10,
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="row1">
          <TextInput label="Title" style={InputStyle} />
          <TextInput label="Tracking Number" style={InputStyle} />
        </div>
        <div className="row2">
          <TextInput label="From" style={InputStyle} />
          <TextInput label="To" style={InputStyle} />
        </div>
        <div className="row3">
          <TextInput label="Subject" style={InputStyle} />
          <div className="sub3">
            <Button label="Incoming" />
            <Button label="Outgoing" />
          </div>
        </div>
        <div className="row4"></div>
      </div>
      <div className="button-container">
        <Button label="Clear" />
        <Button label="Submit" />
      </div>
    </div>
  );
};
