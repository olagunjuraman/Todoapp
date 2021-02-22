interface ButtonProps {
  onClick: () => void;
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {" "}
      {text}
    </button>
  );
};

export default Button;
