import React, {useState, useEffect} from 'react';
import "./Login.css"
import MenuIcon from '@mui/icons-material/Menu';
import LoginBanner from './LoginBanner';
import LoginPics from './LoginPics';
import LoginPage from './LoginPage';
import LoginLib from './LoginLib';
import LoginMe from './LoginMe';
import Footer from './Footer';
import { Button } from '@mui/material';
import { provider, auth } from './firebase';
import { actionTypes } from './reducer';
import { useDataLayerValue, useStateValue } from "./DataLayer";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [show, setShow] = useState(false);
  const [{user}, dispatch] = useDataLayerValue();

  const logIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => (
      // console.log("6ix", result)
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    ))
    .catch((error) => (
      alert(error.message)
    ))
  }

  useEffect(() => {
    window.addEventListener("scroll", onscroll)
    function onscroll() {

    if (window.scrollY > 400 & window.scrollY < 2800) {
        setShow(true);
    }
    else setShow(false);
};

  return () => {
    window.removeEventListener("scroll", onscroll);
  };
}, []);

  return (
    <div className='login'>
        <div className='login__contentWrapper'>
            <div className='login__logo'>
              <div className='login__logoContainer'>
                <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' />
              </div>
              <div className='login__icon'>
                <div className='login__iconMenu'>
                  <MenuIcon className='login__menu' />
                </div>
                <div className='login__iconBtn'>
                  <Button className='login__btn'  onClick={logIn} >LOG IN</Button>
                </div>
              </div>
            </div>
            <div className={`${show? 'login__label' : "login__label--inactive"}`}>
              <div className='login__labelContainer'>
                <Button onClick={logIn} className='login__labelBtn'variant='contained' 
                >
                  <span>
                    GET THE DISNEY BUNDLE
                  </span>
                </Button>
              </div>
            </div>
            <LoginBanner logIn />
            <LoginPics />
            <LoginPage />
            <LoginLib />
            <LoginMe />
        </div>
        <Footer />
    </div>
  )
}

export default Login