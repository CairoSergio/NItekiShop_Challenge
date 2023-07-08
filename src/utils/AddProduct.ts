import { productInerface } from "../types/ProductInterface";

export default function AddProducts(product: productInerface) {
    let produtos: productInerface[] = JSON.parse(window.localStorage.getItem('CartProduct') || '[]');

    produtos.push(product);

    window.localStorage.setItem('CartProduct', JSON.stringify(produtos));
}
