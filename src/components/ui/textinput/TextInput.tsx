import "./TextInput.css";

type TextInputProps = {
  style?: React.CSSProperties;
};

export const TextInput = ({ style }: TextInputProps) => {
  return (
    <div className="textinput-container" style={style}>
      <p>Text Input</p>
      <input type="text" />
    </div>
  );
};
