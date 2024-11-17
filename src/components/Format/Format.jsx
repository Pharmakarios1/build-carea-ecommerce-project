import "./format.scss";

const Format = ({ children, height }) => {
  return (
    <div className={`horizontal ${height}`}>
      <div className="horizontal_inner">{children}</div>
    </div>
  );
};

export default Format;
