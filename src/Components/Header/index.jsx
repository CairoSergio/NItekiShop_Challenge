import React from 'react'
import { AppBar,Link, Container, IconButton, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchInput from "./SearchInput";
export default function AppHeader(){
    return(
        <AppBar sx={{p: 2,  bgcolor:'#fff',boxShadow:'none'}}>
            <Container sx={{display:'flex', alignItems:'center'}}>
                <Box sx={{ flexGrow:1}}>
                    <Link href="/">
                        <img src="Logo.png" />
                    </Link>
                </Box>
                <SearchInput
                    placeholder="Esta procurando por algo especifico?"
                />
                <IconButton href="/Cart">
                    <ShoppingCartIcon/>
                </IconButton>
            </Container>
        </AppBar>
    )
}
