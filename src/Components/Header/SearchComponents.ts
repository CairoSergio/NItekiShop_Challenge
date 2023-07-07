import {InputBase} from '@mui/material'
import {styled, alpha} from '@mui/material/styles'
export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  color:'#6A6A6A',
  backgroundColor: '#E3E3E3',
  '&:hover': {
    backgroundColor: alpha('#E3E3E3', 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  right:0,
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
fontSize:'0.75rem',
'& .MuiInputBase-input': {
    padding: theme.spacing(1.4, 0, 1.4, 1.4),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    width: '14rem',
    '&:focus': {
        width: '20rem',
    },
    },
},
}));
