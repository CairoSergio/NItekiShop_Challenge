import React from 'react'
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { productInerface } from '../../types/ProductInterface';
import { FormatNumber } from '../../utils/FormatNumer';
import removePraduct from '../../utils/removeProduct';
import { useDispatch } from 'react-redux';
import { targetProduct } from '../../Features/Products/ProductsSlice';
import { useMediaQuery } from '@mui/material';

export default function BoxCart(props : productInerface){
    const isLargeScreen = useMediaQuery('(max-width: 1200px)');
    const isSmallScreen = useMediaQuery('(max-width: 445px)');
    const dispatch = useDispatch()
    const handleremove = () =>{
        removePraduct(props)
        dispatch(targetProduct())
    }
    return(
        <Card  sx={{width: 'fit-content', display:{lg:'flex'},height:{lg:'15.5rem'}}}>
            <Box width={`${isSmallScreen ? "100%" : '18rem'}`}>
                <CardMedia
                    component="img"
                    style={{ width: isSmallScreen ? '100%' : isLargeScreen ? '26rem' : '', height: isLargeScreen ? '20rem' : isSmallScreen ? '' : '100%' }}
                    image={props.image}
                />
            </Box>
            <Box component="div" style={{ width: isSmallScreen ? '' : '26rem'}} height="100%" p="0.8rem" display="flex" flexDirection="column" justifyContent="space-between">
                <Box width="100%">
                    <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
                        <Typography color="#3F4046" fontSize="1rem" fontWeight="400">
                            {props.title}
                        </Typography>
                        <IconButton
                            onClick={handleremove}
                        >
                            <DeleteIcon sx={{fontSize:'1.3rem',color:'#FF0000'}}/>
                        </IconButton>
                    </Box>
                    <Typography color="#6A6A6A" fontSize="0.87rem" fontWeight="400" mt="1.12rem">
                        {props.description}
                    </Typography>
                </Box>
                <Typography alignSelf="end" mt={1.8} fontWeight="700" color="#2E2F37" fontSize="1rem">
                    {FormatNumber(props.price)}.00MT
                </Typography>
            </Box>
        </Card>
    )
}