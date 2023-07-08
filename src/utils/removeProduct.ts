import { productInerface } from "../types/ProductInterface";

export default function removePraduct(product: productInerface) {
    let produtos: productInerface[] = JSON.parse(window.localStorage.getItem('CartProduct') || '[]');


    window.localStorage.setItem('CartProduct', JSON.stringify(produtos.filter(prod => prod.id != product.id)));
}
