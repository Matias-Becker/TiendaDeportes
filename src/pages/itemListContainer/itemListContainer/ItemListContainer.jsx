import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Skeleton, Grid } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      }); // []
      setItems(arrayValido);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <Grid container spacing={2}>
        {/* Aquí se ajusta el número de columnas en función del tamaño de la pantalla */}
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box>
              <Skeleton variant="rectangular" width="80%" height={350} />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
