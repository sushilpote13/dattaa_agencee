import { getCartProductFromLocalStorage } from "./getCartProducts";
import { getSumOfAllProducts } from "./getSumOfAllProducts";

export const incrementDecrement = (event, id, stock, prise) => {
    // Get the reference of the current product card
    const currentCardElement = document.querySelector(`#card${id}`);

    // Fetch necessary elements within the card
    const productQuantity = currentCardElement.querySelector(".number_of_product");
    const productPrise = currentCardElement.querySelector(".discount_prise");

    // Get the current quantity from the DOM or set it to 1 by default
    let quantity = parseInt(productQuantity.textContent) || 1;
    let localStoragePrise = 0;

    // Get the current cart data from Local Storage
    let arrLocalStorageProduct = getCartProductFromLocalStorage();

    // Find if the product already exists in the Local Storage cart data
    let existingProduct = arrLocalStorageProduct.find((curElem) => curElem.id === id);

    if (existingProduct) {
        // Set the initial quantity and price if the product exists
        quantity = parseInt(existingProduct.quantity);
        localStoragePrise = parseInt(existingProduct.prise);
    } else {
        // If product does not exist, set default price and quantity
        localStoragePrise = prise;
        prise = prise;
    }

    // Handle increment (+) button
    if (event.target.className === "plus_button") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
        }
    }

    // Handle decrement (-) button
    if (event.target.className === "minus_button") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    // Update the displayed quantity and price
    productQuantity.textContent = quantity;
    localStoragePrise = prise * quantity;
    productPrise.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${localStoragePrise}`;

    // Update the quantity and price in the Local Storage
    if (existingProduct) {
        // If product exists, update the quantity and price
        existingProduct.quantity = quantity;
        existingProduct.prise = localStoragePrise;
    } else {
        // If product doesn't exist, push a new product into the cart array
        arrLocalStorageProduct.push({ id, quantity, prise: localStoragePrise });
    }

    // Store the updated cart data back to Local Storage
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
    getSumOfAllProducts();
};
