import React,{ useEffect } from 'react'
import AppHeader from '../../Components/Header'
import { Toolbar, Container,Button, CardActionArea, CardMedia, Card, Grid, Box, Typography } from '@mui/material'
import { RoundedButtomClass } from '../../Components/RoundedButton'
import BackPackIcon from '@mui/icons-material/ArrowBack'
import { json, useParams } from 'react-router-dom'
import { productInerface } from '../../types/ProductInterface'
import ConvertCategory from '../../utils/ConvertCategory'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddProducts from '../../utils/AddProduct'
import { useDispatch } from 'react-redux'
import { targetProduct } from '../../Features/Products/ProductsSlice'
export default function Details(){
    const  { produto } = useParams()
    const dispatch = useDispatch()
    const ParsedProduct: productInerface = JSON.parse(produto!)
    const handleAddProduct = () =>{
        ParsedProduct.image = 'https://i.pinimg.com/' + ParsedProduct.image + '.jpg'
        AddProducts(ParsedProduct)
        dispatch(targetProduct())
    }
    return(
        <main>
            <AppHeader/>
            <Toolbar/>
            <Toolbar/>
            <Container sx={{pb:3}}>
                <Button 
                    href='/'
                    variant="contained" 
                    sx={RoundedButtomClass}>
                        <BackPackIcon/>
                    Voltar
                </Button>
                <Grid gap={1.9} container mt={2}>
                    <Card sx={{width:'32.75rem', height:'30.75rem'}}>
                        <CardMedia
                            height="100%"
                            component="img"
                            image={'https://i.pinimg.com/' + ParsedProduct.image + '.jpg'}
                        />
                    </Card>
                    <Box width="26.85rem" display="flex" flexDirection="column" justifyContent="space-between">
                        <Box>
                            <Typography color="#6A6A6A" fontSize="1rem">
                                {ConvertCategory(ParsedProduct.category!)}
                            </Typography>
                            <Typography fontSize="1.5rem" color="#3F4046">
                                {ParsedProduct.title}
                            </Typography>
                            <Typography mt="1.95rem" color="#6A6A6A" fontSize="1rem">
                                Descrição
                            </Typography>
                            <Typography color="#41414D" fontSize="0.85rem">
                                {ParsedProduct.description}
                            </Typography>
                            <Typography mt="1.45rem" color="#41414D" fontSize="0.85rem">
                                <Typography component="span" fontWeight="bold" >
                                    NOTA: 
                                </Typography>
                                Este produto esta disponivel apenas para a(as) cidade(s) de {ParsedProduct.location.replace('Moçambique, ', '')}
                            </Typography>
                        </Box>
                        <Button onClick={handleAddProduct} variant='contained' sx={{gap: 1.5, mt:2}}>
                            Adicionar ao carinho
                            <ShoppingCartIcon sx={{fontSize:'1rem'}}/>
                        </Button>
                    </Box>
                </Grid>

            </Container>
        </main>
    )
}