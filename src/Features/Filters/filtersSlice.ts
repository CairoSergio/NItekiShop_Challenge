import { createSlice } from "@reduxjs/toolkit";
import { filterBy } from "../../types/fitlerstype";

const initialState = {
    filter: filterBy.ALL,
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        toAll: (state) =>{
            state.filter = filterBy.ALL
        },
        toCars: (state) =>{
            state.filter = filterBy.CARS
        },
        toTshirts: (state) =>{
            state.filter = filterBy.TSHIRTS
        },
        toComputers: (state) =>{
            state.filter = filterBy.COMPUTERS
        },
        toPhones: (state) => {
            state.filter = filterBy.PHONES
        }
    },
})

export const { toAll, toCars,toComputers,toTshirts,toPhones } = filtersSlice.actions

export default filtersSlice.reducer