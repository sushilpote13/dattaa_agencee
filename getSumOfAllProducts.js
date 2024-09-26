import { getCartProductFromLocalStorage } from "./getCartProducts";
export const getSumOfAllProducts = () => {
    let myCartArr = getCartProductFromLocalStorage();
    console.log(myCartArr);
    let total = 0;
    myCartArr.forEach(curElem => {
        total += curElem.prise
    });
    document.querySelector(".sub_total_text").innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${total}`;
    document.querySelector(".final_total").innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${total + 50}`;
};