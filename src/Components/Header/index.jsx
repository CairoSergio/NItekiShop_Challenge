import React, { useEffect, useState } from 'react'
import { AppBar,Link, Container, IconButton, Box, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchInput from "./SearchInput";
import getProductsCart from '../../utils/GetProductsCart';
import { useDispatch, useSelector } from 'react-redux';
import { seacrchChange } from '../../Features/Filters/filtersSlice';
export default function AppHeader(){
    const produtos = useSelector(state => state.product.product.length)
    const text = useSelector(state => state.filter.search)
    const dispatch = useDispatch()
    const [searchtext , setsearchtext] = useState('')
    useEffect(()=>{
        dispatch(seacrchChange(searchtext))
        console.log(text)
    },[searchtext])
    return(
        <AppBar sx={{p: 2,  bgcolor:'#fff',boxShadow:'none'}}>
            <Container sx={{display:'flex', alignItems:'center'}}>
                <Box sx={{display: { xs: 'none', sm: 'block' },flexGrow:1}}>
                    <Link href="/">
                        <img src="/Logo.png" />
                    </Link>
                </Box>
                <SearchInput
                onChange={(e)=>setsearchtext(e.target.value)}
                    placeholder="Esta procurando por algo especifico?"
                />
                <IconButton href="/Cart">
                    <Badge color='error' badgeContent={produtos}>
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
            </Container>
        </AppBar>
    )
}
