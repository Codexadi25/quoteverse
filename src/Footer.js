import React from 'react';
import './Footer.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';



function Footer() {

   const [value, setValue] = React.useState('recents');
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };


   return (
   <div className='footer'>
      <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
         <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>}/>
         <BottomNavigationAction label="Search" value="search" icon={<SearchIcon/>}/>
         <BottomNavigationAction label="Community" value="community" icon={<Diversity1RoundedIcon/>}/>
         <BottomNavigationAction label="Activity" value="activity" icon={<FavoriteIcon/>}/>
         <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleIcon/>} />
      </BottomNavigation>
   </div>
  )
}

export default Footer