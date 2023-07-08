import {  Grid } from '@mui/material'
import React,{ useEffect } from 'react'
import ProductCard from './Card'
import { Produtos } from '../../utils/Products'
import { useSelector } from 'react-redux'
import { filterBy } from '../../types/fitlerstype'
export default function ProductsGrid(){
    const filter = useSelector((state: any)=> state.filter.filter)
    const search = useSelector((state: any)=> state.filter.search)
    return(
        <Grid container py={2.75} gap={1} justifyContent="center">
            {Produtos.filter((item) => filter === "ALL" ? item : item.category === filter).filter(item => search ? item.title.toLowerCase().includes(search.toLowerCase()) : item).map((produto) => (
                <Grid item  key={produto.id}>
                    <ProductCard
                        {...produto}
                    />
                </Grid>
            ))}
        </Grid>
    )
}