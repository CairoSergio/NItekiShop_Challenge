import { Box, Card, Grid } from '@mui/material'
import React from 'react'
import ProductCard from './Card'

export default function ProductsGrid(){
    return(
        <Grid container pt={2.75} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={3}>
                    <ProductCard/>
                </Grid>
            ))}
        </Grid>
    )
}