import React from 'react';
import "./LoginPage.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function LoginPage() {
  return (
    <div className='LoginPage'>
        <div className='loginPage__bill'>
            <div className='loginPage__billHeadline'>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+</div>
            <h2>Live TV Makes It Better</h2>
            <h3>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.</h3>
            <p>18+ only. Regional restrictions, blackouts and <a data-target="#">Live TV terms apply</a>. Access content from each service separately and access ESPN+ content via Hulu. Location data required to watch certain content. Offer valid for eligible subscribers only.&nbsp;
            <br></br>
            
                Unlimited DVR recording is not available for on-demand shows.
            </p>

            <button>VIEW CHANNELS IN YOUR AREA →</button>
            <ExpandMoreIcon />
        </div>
    </div>
  )
}

export default LoginPage