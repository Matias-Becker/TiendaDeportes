import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let productCollection = collection(db, "products");
    cart.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        Swal.fire(`Gracias por tu compra , tu ticket es ${res.id} `);
      })
      .catch((error) =>
        Swal.fire(
          "Error",
          "No se pudo completar la compra. Inténtalo de nuevo."
        )
      )
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Finaliza tu compra</h1>
      {orderId ? (
        <h2 className="checkout-thank-you">
          Gracias por tu compra, tu ticket es: {orderId}
        </h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturarData}
            name="nombre"
            className="checkout-input"
          />
          <input
            type="email"
            placeholder="Ingresa tu email"
            name="email"
            onChange={capturarData}
            className="checkout-input"
          />
          <input
            type="tel"
            placeholder="Ingresa tu teléfono"
            name="telefono"
            onChange={capturarData}
            className="checkout-input"
          />

          <button type="submit" className="checkout-button">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
