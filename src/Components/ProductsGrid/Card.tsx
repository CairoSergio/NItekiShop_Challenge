import React,{useEffect} from 'react'
import { Box, Button, CardActionArea, Card,CardMedia, Divider, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { productInerface } from '../../types/ProductInterface';
import { FormatNumber } from '../../utils/FormatNumer';
import { useDispatch, useSelector } from'react-redux'
import { useRoutes } from 'react-router-dom'
import { targetProduct } from '../../Features/Products/ProductsSlice';
export default function ProductCard(props: productInerface){
    const dispach = useDispatch()
    const produto = useSelector((state:any)=> state.product.product)
    useEffect(()=>{
        console.log(JSON.stringify(props))
    },[produto])
    const prod ={nome:'çairo'}
    return(
        <Card
            sx={{
                width: '18rem',
                height: '24rem',
                color:'#3F4046'
            }}
            
        >
            <CardActionArea
            href={`/Details?produto=${encodeURIComponent(JSON.stringify(prod))}`}
                // onClick={()=>console.log(props)}
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
                    {/* 73,900.00MT */}
                    {FormatNumber(props.price)}.00MT
                </Typography>
                <Typography
                    px={1.25}
                    pb={3.5}
                    fontSize="0.6rem"
                    fontWeight={400}
                >
                    {/* Cidade de Maputo e Matola */}
                    {props.location}
                </Typography>
            </CardActionArea>
            <Box
                px={0.75}
            >
                <Button onClick={()=> console.log('Button')} sx={{zIndex:11111,width:'100%', gap:'0.5rem',fontSize:'0.75rem', height:'2rem', bgcolor:"var(--primary-color)"}} variant='contained'>
                    ADICIONAR AO CARINHO
                    <ShoppingCartIcon sx={{fontSize:'1rem'}}/>
                </Button>
            </Box>
        </Card>
    )
}