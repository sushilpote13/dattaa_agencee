import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { showToast } from "./showToast";

const productContainer = document.querySelector(".product_container");
const productTemplate = document.querySelector(".productTemplate");
export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const {
      id,
      name,
      category,
      brand,
      realPrise,
      prise,
      stock,
      description,
      image,
      alternative,
    } = curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#card_value").setAttribute("id", `card${id}`);
    productClone.querySelector(".item_type").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = alternative;
    productClone.querySelector(".product_name").textContent = name;
    productClone.querySelector(".product_description").textContent =
      description;
    productClone.querySelector(
      ".discount_prise"
    ).innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${prise}`;
    productClone.querySelector(
      ".real_prise"
    ).innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${prise * 4}`;
    productClone.querySelector(".product_stock_quantity").textContent = stock;

    productClone
      .querySelector(".product_contant_add_remove")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add_to_cart")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
        showToast("add", id);
      });

    productContainer.append(productClone);
  });
};
