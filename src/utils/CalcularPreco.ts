import { productInerface } from "../types/ProductInterface";
export default function CalcularPrecoTotal(array : productInerface[]){
    if(!array){
        return 0;
    }
    let total = 0;

    array.forEach((prod)=>{
        total += prod.price
    })

    return total
}