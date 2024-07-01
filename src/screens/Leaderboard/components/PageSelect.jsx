const PageSelect = ({ view, setView }) => {
  const ul = {
    textDecorationLine: "underline",
    textUnderlineOffset: "2px",
    cursor: "pointer",
  };
  const Divider = () => <span>&nbsp;|&nbsp;</span>;
  const Selection = ({ text, viewText }) => (
    <span
      style={viewText === view ? ul : { cursor: "pointer" }}
      onClick={() => setView(viewText)}
    >
      {text}
    </span>
  );

  return (
    <div className="lb-page-select">
      <Selection text={"Today"} viewText={"today"} />
      <Divider />
      <Selection text={"Yesterday"} viewText={"yesterday"} />
      <Divider />
      <Selection text={"All Time"} viewText={"allTime"} />
    </div>
  );
};

export default PageSelect;
