import "./Button.css";

type ButtonProps = {
  style?: React.CSSProperties;
  onClick?: () => void;
  label: string;
};

export const Button = ({ label, onClick, style }: ButtonProps) => {
  return (
    <div className="button-container" style={style}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};
