import { TextField, createTheme, MenuItem, ThemeProvider } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';

import React from 'react';
import './Header.css'
import categories from '../../data/category';

const Header = ({ setCategory, category, word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#ffff",

            },
            type: 'dark',
        },
    });
    const handleChange = (language) =>{
        setCategory(language);
        setWord("");

    }



    return (
        <div className='header'>
            <span className='title' >{word?word: "word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        placeholder='search a word'
                        value={ word}
                        onChange={(e) => setWord(e.target.value)}
                        sx={{
                            backgroundColor:'#D3D3D3',
                            borderRadius: '9px'
                        }}
                       
                    />
                    
                    <TextField
                        className="select"
                        select
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        sx={{
                            backgroundColor:'#D3D3D3',
                            borderRadius: '9px'
                        }}
                       
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
