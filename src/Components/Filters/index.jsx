import { useState } from "react";
import { Box, Button} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import FilterMenu from "./FiltersMenu";
import FilterType from "./FIlterType";


export default function Filters(){
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <Box sx={{display:'flex', gap:'1rem'}}>
            <Button 
                onClick={handleMenu}                
                variant="contained" 
                sx={{ gap:1,boxShadow:"none",":hover":{ bgcolor:'#D0D0D0' }, bgcolor:'#D0D0D0', color:'#6A6A6A', borderRadius:"1.5rem"}}>
                <TuneIcon/>
                Filtros
            </Button>
            <FilterMenu isOPen={anchorEl} handleClose={handleClose}/>
            <FilterType/>
        </Box>
    )
}