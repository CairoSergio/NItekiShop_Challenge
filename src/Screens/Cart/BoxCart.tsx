import React from 'react'
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { productInerface } from '../../types/ProductInterface';
import { FormatNumber } from '../../utils/FormatNumer';
import removePraduct from '../../utils/removeProduct';
import { useDispatch } from 'react-redux';
import { targetProduct } from '../../Features/Products/ProductsSlice';
interface BoxCartProps {

}
export default function BoxCart(props : productInerface){
    const dispatch = useDispatch()
    const handleremove = () =>{
        removePraduct(props)
        dispatch(targetProduct())
    }
    return(
        <Card sx={{width:'44rem', display:'flex',height:'15.5rem'}}>
            <Box width="18rem">
                <CardMedia
                    component="img"
                    width='18rem'
                    height="100%"
                    image={props.image}
                />
            </Box>
            <Box height="100%" width='26rem' p="0.8rem" display="flex" flexDirection="column" justifyContent="space-between">
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
                <Typography alignSelf="end" fontWeight="700" color="#2E2F37" fontSize="1rem">
                    {FormatNumber(props.price)}.00MT
                </Typography>
            </Box>
        </Card>
    )
}