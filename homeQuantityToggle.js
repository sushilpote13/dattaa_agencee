import { showToast } from "./showToast";

export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity =
    currentCardElement.querySelector(".number_of_product");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "plus_button") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }
  if (event.target.className === "minus_button") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
