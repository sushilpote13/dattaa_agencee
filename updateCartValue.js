export const updateCartValue = (array) => {
  document.querySelector(
    ".navigation_bar_my_cart_link"
  ).innerHTML = `<i class="fa-solid fa-cart-shopping">  ${array.length}</i>`;
};
