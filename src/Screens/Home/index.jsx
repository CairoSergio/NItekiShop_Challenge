import React from 'react'
import {Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import Filters from '../../Components/Filters'
import AppHeader from '../../Components/Header'
import ProductsGrid from '../../Components/ProductsGrid'
export default function Home(){
    return (
        <main>
            <AppHeader/>
            <Toolbar/>
            <Toolbar/>
            <Container component="section">
                <Filters/>
                <ProductsGrid/>
            </Container>
        </main>
    ) 
}