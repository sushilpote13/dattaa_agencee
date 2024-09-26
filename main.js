import "./style_store.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCard";
//  call the function to display all the products as a card
//defining a function name showProductContainer which takes array as an input
showProductContainer(products);
