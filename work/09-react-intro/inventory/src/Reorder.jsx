import "./Reorder.css";

function Reorder({ onReorder }) {
  return (
    <button className="button__reorder" onClick={onReorder}>
      Reorder
    </button>
  );
}

export default Reorder;
