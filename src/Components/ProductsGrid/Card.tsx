import React,{useEffect} from 'react'
import { Box, Button, CardActionArea, Card,CardMedia, Divider, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { productInerface } from '../../types/ProductInterface';
import { FormatNumber } from '../../utils/FormatNumer';
import { useDispatch, useSelector } from'react-redux'
import { useRoutes } from 'react-router-dom'
import { targetProduct } from '../../Features/Products/ProductsSlice';
import AddProducts from '../../utils/AddProduct';
import getProductsCart from '../../utils/GetProductsCart';
export default function ProductCard(props: productInerface){
    const dispatch = useDispatch()
    const prod:productInerface = {
        id: props.id,
        image: props.image.replace('https://i.pinimg.com/', '').replace('.jpg', ''),
        location: props.location,
        price: props.price,
        title: props.title,
        category: props.category,
        description: props.description,
    }
    const parsed =  JSON.stringify(prod)
    const encode  = encodeURIComponent(parsed)
    const handleAddProduct = () =>{
        AddProducts(props)
        dispatch(targetProduct())
    }
    return(
        <Card
            sx={{
                width: '17rem',
                height: '24rem',
                color:'#3F4046',
            }}
            
        >
            <CardActionArea
            href={`/Details/${encode}`}
                onClick={()=>console.log(parsed)}
            >

                <CardMedia
                    component="img"
                    height="240"
                    image={props.image}
                />
                <Typography
                    py={0.65}
                    px={1.25}
                >
                    {props.title}
                </Typography>
                <Divider/>
                <Typography
                px={1.25}
                fontWeight={700}
                >
                    {FormatNumber(props.price)}.00MT
                </Typography>
                <Typography
                    px={1.25}
                    pb={3.5}
                    fontSize="0.6rem"
                    fontWeight={400}
                >
                    {props.location}
                </Typography>
            </CardActionArea>
            <Box
                px={0.75}
            >
                <Button onClick={handleAddProduct} sx={{width:'100%', gap:'0.5rem',fontSize:'0.75rem', height:'2rem', bgcolor:"var(--primary-color)"}} variant='contained'>
                    ADICIONAR AO CARINHO
                    <ShoppingCartIcon sx={{fontSize:'1rem'}}/>
                </Button>
            </Box>
        </Card>
    )
}