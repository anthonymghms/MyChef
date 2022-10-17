import * as React from 'react';
import { styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { LocationOn } from '@mui/icons-material';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

const cities = ["Aaley","Adma","Ashrafiye","Baabda","Baalbek","Beirut","Broummana","Bsalim","Chekka","Dbaiye","Dik el Mehdi","Halba","Hboub","Sarba","Sidon","Tripoli","Yanar","Zgharta"]


const StyledMenu = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Your Location" />}
    />
  )
}

const SearchContainer = styled('div')(({ theme }) => ({
  display:'grid',
  gridTemplateColumns:'repeat(6, minmax(0, 1fr))',
}))

const Location = styled('div')(({ theme }) => ({
    gridColumn:'span 2 / span 2',
    gridColumnStart:'1',
    position: 'relative',
    borderBottomRightRadius:0,
    borderTopRightRadius:0,
    borderRadius: '4px 0 0 4px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}));

const LocationIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    gridColumn:'span 4 / span 4',
    gridColumnStart:'3',
    position: 'relative',
    borderRadius: '0 4px 4px 0',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  
  

const Hero = () => {
    return (
                  <div className='hero-container'>
                    <div className='content-container'>
                      <div className='logo-container'>
                          <img src='./images/logoMychef.png' className='img-hero' alt='Logo' />    
                      </div>
                      <div className='hero-text'>
                          <p>Discover the best local chefs around you</p>
                      </div>
                      <div className='search-container'>
                        <SearchContainer>
                          <Location>
                            <LocationIconWrapper>
                              <LocationOn/>
                            </LocationIconWrapper>
                            <StyledMenu/>
                          </Location>
                          <Search>
                              <SearchIconWrapper>
                              <SearchIcon />
                              </SearchIconWrapper>
                              <StyledInputBase
                              placeholder="Search for chefs, cuisine or a dish"
                              inputProps={{ 'aria-label': 'search' }}
                              />
                          </Search>
                        </SearchContainer>  
                      </div>
                    </div>
                </div> 
    )
}

export default Hero;