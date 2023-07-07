import React from 'react'
import { Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from "react-redux";
import { toAll } from "../../Features/Filters/filtersSlice";
export default function FilterType(){
    const filer = useSelector((state)=>state.filter.filter)
    const dispach = useDispatch()
    return(
        <>
            {
                filer != 'ALL'
                && 
                <Button
                variant="contained"
                sx={{ gap:1,boxShadow:"none", borderRadius:"1.5rem"}}
                >
                    {
                        filer === 'CARS'
                        && 
                        "carros"
                    }
                    {
                        filer === 'COMPUTERS'
                        && 
                        "computadores"
                    }
                    {
                        filer === 'PHONES'
                        && 
                        "celulares"
                    }
                    {
                        filer === 'TSHIRTS'
                        && 
                        "camisetas"
                    }
                    <IconButton onClick={()=>dispach(toAll())} size="small" sx={{color:'#fff',bgcolor:'#ffffff5a'}}>
                        <CloseIcon fontSize="5px"/>
                    </IconButton>
                </Button>
            }
        </>
    )
}