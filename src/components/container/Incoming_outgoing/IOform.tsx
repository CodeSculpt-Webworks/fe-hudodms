import "./IOform.css";
import { useState } from "react";
import { Button, TextInput, RadioButton } from "../..";
import { useDropzone } from "react-dropzone";

const inputStyle = {
  height: 55,
  marginRight: 10,
};

const fullWidthInputStyle = {
  ...inputStyle,
  width: "100%",
};

const halfWidthInputStyle = {
  ...inputStyle,
  width: "50%",
};

const buttonStyle = {
  height: 55,
  width: "24%",
  marginRight: 10,
};

export const IOform = () => {
  const { getRootProps, getInputProps } = useDropzone();

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="row1">
          <TextInput label="Title" style={fullWidthInputStyle} />
          <TextInput label="Tracking Number" style={halfWidthInputStyle} />
        </div>
        <div className="row2">
          <TextInput label="From" style={halfWidthInputStyle} />
          <TextInput label="To" style={halfWidthInputStyle} />
        </div>
        <div className="row3">
          <TextInput label="Subject" style={halfWidthInputStyle} />
          <div className="sub3">
            <RadioButton
              label="Incoming"
              value="incoming"
              checked={selectedOption === "incoming"}
              onChange={handleRadioChange}
              style={halfWidthInputStyle}
            />
            <RadioButton
              label="Outgoing"
              value="outgoing"
              checked={selectedOption === "outgoing"}
              style={halfWidthInputStyle}
              onChange={handleRadioChange}
            />
          </div>
        </div>
        <div
          className="row4"
          {...getRootProps()}
          style={{
            border: "2px dashed #aaaaaa",
            borderRadius: "4px",
            padding: "50px",
            textAlign: "center",
            color: "white",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
      <div className="button-container">
        <Button label="Clear" style={buttonStyle} />
        <Button label="Submit" style={buttonStyle} />
      </div>
    </div>
  );
};
