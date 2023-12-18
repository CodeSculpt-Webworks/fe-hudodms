import "./IOform.css";
import { useState, useCallback } from "react";
import { Button, TextInput, RadioButton } from "../..";
import { HudoLogo } from "../../../assets";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";

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

Modal.setAppElement("#root");

export const IOform = () => {
  const [formData, setFormData] = useState({
    title: "",
    trackingNumber: "",
    from: "",
    to: "",
    subject: "",
    option: "",
    attachmentName: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: useCallback(
      (acceptedFiles: File[]) => {
        const attachmentName =
          acceptedFiles.length > 0 ? acceptedFiles[0].name : "";
        setFormData({
          ...formData,
          attachmentName,
        });

        onFileUpload(acceptedFiles);
      },
      [formData]
    ),
  });

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, option: value });
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    if (Object.values(formData).some((value) => value === "")) {
      setModalIsOpen(true);
    } else {
      console.log("Form Data:", formData);
    }
  };

  const handleClear = () => {
    setFormData({
      title: "",
      trackingNumber: "",
      from: "",
      to: "",
      subject: "",
      option: "",
      attachmentName: "",
    });
  };

  const onFileUpload = (files: File[]) => {
    console.log("Uploaded Files:", files);
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="row1">
          <TextInput
            label="Title"
            style={fullWidthInputStyle}
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
          <div className="sub1">
            <TextInput
              label="Tracking Number"
              style={fullWidthInputStyle}
              value={formData.trackingNumber}
              onChange={(e) =>
                handleInputChange("trackingNumber", e.target.value)
              }
            />
          </div>
        </div>
        <div className="row2">
          <TextInput
            label="From"
            style={halfWidthInputStyle}
            value={formData.from}
            onChange={(e) => handleInputChange("from", e.target.value)}
          />
          <div className="sub2">
            <TextInput
              label="To"
              style={fullWidthInputStyle}
              value={formData.to}
              onChange={(e) => handleInputChange("to", e.target.value)}
            />
          </div>
        </div>
        <div className="row3">
          <TextInput
            label="Subject"
            style={halfWidthInputStyle}
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
          />
          <div className="sub3">
            <RadioButton
              label="Incoming"
              value="incoming"
              checked={formData.option === "incoming"}
              onChange={() => handleRadioChange("incoming")}
              style={halfWidthInputStyle}
            />
            <RadioButton
              label="Outgoing"
              value="outgoing"
              checked={formData.option === "outgoing"}
              onChange={() => handleRadioChange("outgoing")}
              style={halfWidthInputStyle}
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
          <input
            {...getInputProps()}
            onChange={(e) =>
              handleInputChange("attachmentName", e.target.value)
            }
          />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
      <div className="button-container">
        <Button label="Clear" style={buttonStyle} onClick={handleClear} />
        <Button label="Submit" style={buttonStyle} onClick={handleSubmit} />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        className="modal-container"
      >
        <img src={HudoLogo} alt="hudo-logo" />
        <p>
          You forgot to fill in all the fields. Please fill in all the fields.
        </p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};
