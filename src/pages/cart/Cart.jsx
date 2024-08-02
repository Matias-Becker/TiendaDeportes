import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./cart.css";

export const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Seguro quieres eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, borrar",
      denyButtonText: "No, no borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se eliminó", "", "info");
      }
    });
  };

  return (
    <div className="cart-container">
      {cart.map((elemento) => (
        <div key={elemento.id} className="cart-item">
          <img
            src={elemento.img}
            alt={elemento.title}
            className="cart-item-img"
          />
          <div>
            <h2>{elemento.title}</h2>
            <h2>Cantidad: {elemento.quantity}</h2>
            <h2>Precio: ${elemento.price.toFixed(2)}</h2>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#dc3545",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#c82333",
                },
              }}
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        </div>
      ))}
      <h2 className={cart.length > 0 ? "cart-total" : "ocultar"}>
        El total a pagar es ${total.toFixed(2)}
      </h2>
      {cart.length > 0 && (
        <Button
          sx={{
            backgroundColor: "#dc3545",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#c82333",
            },
            margin: "20px",
          }}
          onClick={clearCart}
        >
          Limpiar carrito
        </Button>
      )}
      {cart.length > 0 && (
        <Link to="/checkout">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#28a745",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#218838",
              },
            }}
          >
            Finalizar compra
          </Button>
        </Link>
      )}
    </div>
  );
};
