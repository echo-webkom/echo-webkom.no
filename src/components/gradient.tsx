interface GradientProps {
  dir: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
  from: string;
  to: string;
  children: React.ReactNode;
  className?: string;
}

const Gradient = ({ from, to, dir, className, children }: GradientProps) => {
  const calculateDirection = () => {
    if (dir === "left-to-right") return "to right";
    if (dir === "right-to-left") return "to left";
    if (dir === "top-to-bottom") return "180deg";
    if (dir === "bottom-to-top") return "0deg";
  };

  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(${calculateDirection()}, ${from}, ${to})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default Gradient;
