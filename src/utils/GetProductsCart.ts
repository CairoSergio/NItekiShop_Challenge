export default function getProductsCart(){
    return JSON.parse(window.localStorage.getItem('CartProduct') || '[]');
}