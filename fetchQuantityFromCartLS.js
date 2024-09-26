import { getCartProductFromLocalStorage } from "./getCartProducts";

export const fetchQuantityFromLS = (id, prise) => {
    let cartProduct = getCartProductFromLocalStorage();
    let existingProduct = cartProduct.find((curProd) => curProd.id === id);
    console.log(existingProduct);

    let quantity = 1;
    if (existingProduct) {
        quantity = existingProduct.quantity;
        prise = existingProduct.prise;
    }
    return { quantity, prise };
};