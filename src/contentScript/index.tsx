import * as React from "react";
import * as ReactDOM from "react-dom";
import { ContentScript } from "./component";

const content = document.getElementsByClassName("content")[0];
const productList = document.getElementsByClassName("products_list")[0];
const productContent = document.createElement("div");
productContent.id = "product_content";
const layeredNav = document.createElement("div");
layeredNav.id = "content_script";

if (productList && content) {
    content.insertBefore(productContent, productList);
    productContent.appendChild(layeredNav);
    productContent.appendChild(productList);
}

ReactDOM.render(<ContentScript />, document.getElementById("content_script"));
