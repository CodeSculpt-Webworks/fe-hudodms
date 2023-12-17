import "./TextInput.css";

type TextInputProps = {
  style?: React.CSSProperties;
  label: string;
};

export const TextInput = ({ style, label = "Label" }: TextInputProps) => {
  return (
    <div className="textinput-container" style={style}>
      <p>{label}</p>
      <input type="text" />
    </div>
  );
};
