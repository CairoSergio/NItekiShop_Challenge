import { filterBy } from "./fitlerstype";

export interface productInerface{
    id: number,
    image: string,
    title: string,
    price: number,
    location: string,
    description?: string,
    category?: filterBy,
}