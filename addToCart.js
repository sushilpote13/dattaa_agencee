import { getCartProductFromLocalStorage } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
updateCartValue(getCartProductFromLocalStorage());
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLocalStorage();

  const currentProdELem = document.querySelector(`#card${id}`);

  let quantity = currentProdELem.querySelector(`.number_of_product`).innerText;
  let prise = currentProdELem.querySelector(`.discount_prise`).innerText;


  let exiting = false;
  arrLocalStorageProduct.forEach((element) => {
    if (Number(id) === Number(element["id"])) {
      exiting = true;
      if (!(Number(quantity) === 1)) {
        element["quantity"] = Number(quantity) + Number(element["quantity"]);
        element["prise"] = Number(prise * element["quantity"]);
      }
    }
  });
  if (exiting) {
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  } else {
    quantity = Number(quantity);
    prise = Number(prise * quantity);
    arrLocalStorageProduct.push({ id, quantity, prise });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  }
  console.log(arrLocalStorageProduct);

  updateCartValue(arrLocalStorageProduct);
};