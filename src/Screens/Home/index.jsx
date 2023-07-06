import { Container, Toolbar } from '@mui/material'
import Filters from '../../Components/Filters'
import AppHeader from '../../Components/Header'
export default function Home(){
    return (
        <main>
            <AppHeader/>
            <Toolbar/>
            <Toolbar/>
            <Container component="main">
                <Filters/>
            </Container>
        </main>
    ) 
}