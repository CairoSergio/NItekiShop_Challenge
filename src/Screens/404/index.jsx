import { Button } from "@mui/material";

export default function PageNotFound(){
    return(
        <div style={{height:'100vh', flexDirection:'column',gap:'10px',width:'100vw', display:'flex', justifyContent:"center", alignItems:'center'}}>
            <h3 color="#3F4046">
                Error 404 | Pagina nao enconrada
            </h3>
            <Button href="/" variant="contained">
                Voltar Para a pagina inicial
            </Button>
        </div>
    )
}