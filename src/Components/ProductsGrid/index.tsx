import {  Grid } from '@mui/material'
import React,{ useEffect } from 'react'
import ProductCard from './Card'
import { Produtos } from '../../utils/Products'
import { useSelector } from 'react-redux'
import { filterBy } from '../../types/fitlerstype'
export default function ProductsGrid(){
    const filter = useSelector((state: any)=> state.filter.filter)
    return(
        <Grid container py={2.75} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 10, md: 12 }}>
            {Produtos.filter((item) => filter === "ALL" ? item : item.category === filter).map((produto) => (
                <Grid item xs={2} sm={4} md={3} key={produto.id}>
                    <ProductCard
                        id={produto.id}
                        image={produto.image}
                        location={produto.location}
                        price={produto.price}
                        title={produto.title}
                    />
                </Grid>
            ))}
        </Grid>
    )
}