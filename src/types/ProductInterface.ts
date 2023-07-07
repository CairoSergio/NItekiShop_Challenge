import { filterBy } from "./fitlerstype";

export interface productInerface{
    image: string,
    title: number,
    price: string,
    location: string,
    descritioon?: string,
    category?: filterBy,
}