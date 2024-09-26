import products from "./api/products.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLocalStorage } from "./getCartProducts";
import { getSumOfAllProducts } from "./getSumOfAllProducts";
import { incrementDecrement } from "./incrementDecrement";
import { showToast } from "./showToast";

let cartProducts = getCartProductFromLocalStorage();

let filterProducts = products.filter((curProd) => {
    // Filtering cart products based on stored product ids
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);

const cartElement = document.querySelector(".main_total_page");
const templateContainer = document.querySelector(".main_total_page_template");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, prise, alternative } = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        let LSActualData = fetchQuantityFromLS(id, prise);

        productClone.querySelector(".my_cart_product_container").setAttribute("id", `card${id}`);
        productClone.querySelector(".item_type").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = alternative;
        productClone.querySelector(".product_name").textContent = name;
        productClone.querySelector(".discount_prise").innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${prise * LSActualData.quantity}`
        productClone.querySelector(".number_of_product").textContent = LSActualData.quantity;

        //? Remove button event listener
        productClone.querySelector(".remove").addEventListener("click", (event) => {
            cartProducts = cartProducts.filter(curElem => curElem.id !== id);
            console.log(cartProducts);

            document.getElementById(`card${id}`).remove();
            localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
            document.querySelector(".navigation_bar_my_cart_link").innerHTML = `<i class="fa-solid fa-cart-shopping"></i>${cartProducts.length}`;
            getSumOfAllProducts();
            showToast("delete", id);
        });

        //? This is Increment And Decrement function
        productClone.querySelector(".product_contant_add_remove").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, prise);
        })
        // document.querySelector(".sub_total_text").textContent = getSumOfAllProducts();

        cartElement.appendChild(productClone);
    });
    getSumOfAllProducts();
};

document.querySelector(".navigation_bar_my_cart_link").innerHTML = `<i class="fa-solid fa-cart-shopping"></i>${cartProducts.length}`;
showCartProduct();