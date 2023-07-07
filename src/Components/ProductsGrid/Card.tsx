import React from 'react'
import { Box, Button, Card, CardMedia, Divider, Typography } from "@mui/material";
import { productInerface } from '../../types/ProductInterface';
export default function ProductCard(){
    return(
        <Card
            sx={{
                width: '18rem',
                height: '24rem',
                color:'#3F4046'
            }}
        >
            <CardMedia
                component="img"
                height="240"
                image="https://i.pinimg.com/564x/61/ee/d4/61eed47998496dbadb5403965f4ee34d.jpg"
                alt="Paella dish"
            />
            <Typography
            py={0.65}
            px={1.25}
            >
                Samsung Galaxy Z Flip 4
            </Typography>
            <Divider/>
            <Typography
            px={1.25}
            fontWeight={700}
            >
                73,900.00MT
            </Typography>
            <Typography
                px={1.25}
                fontSize="0.6rem"
                fontWeight={400}
            >
                Cidade de Maputo e Matola
            </Typography>
            <Box
                pt={3.5}
                px={0.75}
            >
                <Button sx={{width:'100%', height:'2rem', bgcolor:"var(--primary-color)"}} variant='contained'>
                    ADICIONAR AO CARINHO
                </Button>
            </Box>
        </Card>
    )
}