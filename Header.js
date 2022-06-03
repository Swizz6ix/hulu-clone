import React from 'react'
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import Button from '@mui/material/Button';

function Header() {
  const [{user}, dispatch] = useDataLayerValue();

  const logOut = () => {
    if (user) {
      signOut(auth)
    }
  }

  
  return (
    <div className='header'>
        <div className='header__icons'>
            <div className='header__icon header__icon--active'>
            <HomeIcon />
            <p>Home</p>
            </div>

            <div className='header__icon'>
            <FlashOnIcon />
            <p>Trending</p>
            </div>

            <div className='header__icon'>
            <LiveTvIcon />
            <p>verified</p>
            </div>
            
            <div className='header__icon'>
            <VideoLibraryIcon />
            <p>Collections</p>
            </div>

            <div className='header__icon'>
            <SearchIcon />
            <p>Search</p>
            </div>

            <div className='header__icon header--active'>
            <PersonOutlinedIcon />
            <p>Account</p>
            </div>

            <div className='header__icon header--logout'>
            <PowerSettingsNewIcon />
            <Button onClick={logOut} size='small' variant='contained'>Log Out</Button>
            </div>

        </div>
        <div className='header__logo'>
          <div className='header__avatar'>
              <Avatar src={user.photoURL} alt={user.displayName} />
              <p>{user.displayName}</p>
          </div>
          <div className='header__logout header--active'>
            <PowerSettingsNewIcon onClick={logOut} />
            <Button onClick={logOut} size='small' variant='contained'>Log Out</Button>
          </div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' alt='logo' />
        </div>
    </div>
  )
}
// https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png
export default Header