import "./Button.css";

type ButtonProps = {
  style: React.CSSProperties;
  onClick?: () => void;
  buttonText: string;
};

export const Button = ({ buttonText, onClick, style }: ButtonProps) => {
  return (
    <div className="button-container" style={style}>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};
