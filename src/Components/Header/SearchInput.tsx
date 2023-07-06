import React from 'react';
import { InputBaseProps } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from './SearchComponents';
export default function SearchInput(props: InputBaseProps){

    return(
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            {...props}
          />
        </Search>
    )
}