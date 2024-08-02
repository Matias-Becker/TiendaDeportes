import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span> {item.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripción:</span>{" "}
            {item.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> ${item.price}.-
          </h2>
          <CounterContainer
            onAdd={onAdd}
            stock={item.stock}
            initial={initial}
          />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
