import { InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#E3E3E3',
    color:'#6A6A6A',
    '&:hover': {
        backgroundColor: alpha('#E3E3E3', 0.25),
    },
    marginLeft:'0.5rem',
    marginRight:'0.5rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: 0,
        marginRight:'3rem',
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('button')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    background:'none',
    border:'none',
    color:'inherit',
    position: 'absolute',
    pointerEvents: 'none',
    right:0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    fontSize:' 0.75rem',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1.3, 1.3, 1.3, 1.3),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: '13rem',
        '&:focus': {
        width: '20rem',
        },
    },
    },
}));