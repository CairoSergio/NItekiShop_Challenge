import React from 'react'
import { Menu, MenuItem } from "@mui/material";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { toAll, toCars, toComputers, toPhones, toTshirts } from "../../Features/Filters/filtersSlice";
import { useEffect } from "react";
export default function FilterMenu(props){
    const filter = useSelector((state) => state.filter.filter)
    const dispatch = useDispatch()
    useEffect(()=>{
        props.handleClose()
    },[filter])
    return(
        <Menu
            id="menu-appbar"
            anchorEl={props.isOPen}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={Boolean(props.isOPen)}
            onClose={props.handleClose}
        >
        <MenuItem onClick={()=>
            {dispatch(toAll())}
        } selected={filter === 'ALL'}>TODOS PRODUTOS</MenuItem>
        <MenuItem onClick={()=>
            {dispatch(toComputers())
        }} selected={filter === 'COMPUTERS'}>COMPURADORES</MenuItem>
        <MenuItem onClick={()=>
            {dispatch(toPhones())
        }} selected={filter === 'PHONES'}>CELULARES</MenuItem>
        <MenuItem onClick={()=>
            {dispatch(toTshirts())
        }} selected={filter === 'TSHIRTS'}>CAMISETAS</MenuItem>
        <MenuItem onClick={()=>
            {dispatch(toCars())
        }} selected={filter === 'CARS'}>CARROS</MenuItem>
        </Menu>
    )
}

FilterMenu.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOPen: PropTypes.bool.isRequired,
  };