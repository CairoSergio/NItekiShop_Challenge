import { filterBy } from "../types/fitlerstype";

export default function ConvertCategory(category: filterBy){
    if(category === filterBy.CARS){
        return 'Carros'
    }
    if(category === filterBy.COMPUTERS){
        return 'Computadores'
    }
    if(category === filterBy.PHONES){
        return 'Celulares'
    }
    if(category === filterBy.TSHIRTS){
        return 'Camisetas'
    }

}