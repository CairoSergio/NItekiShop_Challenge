import React, { useState } from "react";
import { Box, Button} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import FilterMenu from "./FiltersMenu";
import FilterType from "./FIlterType";
import { RoundedButtomClass } from "../RoundedButton";

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
                sx={RoundedButtomClass}>
                <TuneIcon/>
                Filtros
            </Button>
            <FilterMenu isOPen={anchorEl} handleClose={handleClose}/>
            <FilterType/>
        </Box>
    )
}