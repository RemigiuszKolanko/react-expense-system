import "./Card.css";

export const Card = ({ children, className }) => {
  const style = `${className} card`;

  return <div className={style}>{children}</div>;
};
