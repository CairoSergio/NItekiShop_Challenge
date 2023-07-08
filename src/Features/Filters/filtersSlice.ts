import { createSlice } from "@reduxjs/toolkit";
import { filterBy } from "../../types/fitlerstype";

const initialState = {
    filter: filterBy.ALL,
    search: ''
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        seacrchChange: (state, action) => {
            state.search  = action.payload
        },
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

export const { toAll, toCars,seacrchChange ,toComputers,toTshirts,toPhones } = filtersSlice.actions

export default filtersSlice.reducer