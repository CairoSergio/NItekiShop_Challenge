import { useEffect } from 'react'
import AppHeader from '.././../Components/Header'
import { Toolbar, Container,Button, CardActionArea, CardMedia } from '@mui/material'
import { RoundedButtomClass } from '../../Components/RoundedButton'
import BackPackIcon from '@mui/icons-material/ArrowBack'
import { useParams } from 'react-router-dom'
export default function Details(){
    const  { produto } = useParams()
    useEffect(()=>{
        console.log(produto)
    },[])
    return(
        <main>
            <AppHeader/>
            <Toolbar/>
            <Toolbar/>
            <Container>
                <Button 
                    href='/'
                    variant="contained" 
                    sx={RoundedButtomClass}>
                        <BackPackIcon/>
                    Voltar
                </Button>
                <CardActionArea sx={{width:'38.75rem', height:'32.75rem'}}>
                    <CardMedia
                     component="img"
                    //  image={produto.payloand.image}
                    />
                </CardActionArea>
                <>
                    {
                        produto
                    }
                </>
            </Container>
        </main>
    )
}