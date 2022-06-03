import React from 'react';
import "./LoginBanner.css";
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { provider, auth } from './firebase';
import { actionTypes } from './reducer';
import { useDataLayerValue, useStateValue } from "./DataLayer";
import { signInWithPopup } from "firebase/auth";


function LoginBanner() {
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

  return (
    <div>
        <div className='loginBanner'>
            <div className='loginBanner__bgd'>
                <div className='loginBanner__top'></div>
                <picture className='loginBanner__pic'>
                    <source  className='login__banner__pic' media='(min-width: 769px)' srcSet='https://www.hulu.com/static/hitch/s3/attachments/ckzoylttk003x1v6mcd4p0gk2-ckxgnvin29r771v5fyutjbf5c-bundle-6400x2640-desktop-1x.jpg'></source>
                    <source  className='loginBanner__pic' media='(max-width: 768px)' srcSet='https://www.hulu.com/static/hitch/s3/attachments/ckzix23lwm25o1k7r09ac8cjj-ckziwwfevs5xn1v5f4zy5gwvd-ckxgnvilb9r5y1v3x4sx8ys7a-bundle-3072x2640-tablet-1x-full-full.jpg'></source>
                    <source  className='loginBanner__pic' media='(max-width: 415px)' srcSet='https://www.hulu.com/static/hitch/s3/attachments/ckzix351js63w1v6mno9t6puw-ckxgnviiz9qts1v59ikettiyg-bundle-1500x2608-mobile-no-grad-full.jpg'></source>
                    <img  className='loginBanner__pic hidden' alt='preloading masthead' />
                </picture> 
                <div className='loginBanner__pic loginBanner__img loginBanner__bgdImg'></div> 
            </div>
            <div className='loginBanner__contents'>
                <div className='loginBanner__headline'>
                    bundle with any hulu plan and save
                </div> 
                <img className='loginBanner__headlineImg' src='https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png' alt='' /> 

                <p> Get endless entertainment, live sports, and the shows and movies you love.
                </p>
                <div className='loginBanner__contentsLinks'>
                    <Button onClick={logIn} variant='contained' endIcon={<SendIcon className='login__endIcon' />}>CLICK TO GET IN</Button>
                    <div className='loginBanner__links'>
                    <a href='#'>
                        What's included?
                    </a>
                    <div></div>
                    See 
                    <a href='#'>Bundle terma.</a>
                    </div>
                        <br></br>
                    <a href='#'>Sign up for Hulu only</a>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default LoginBanner