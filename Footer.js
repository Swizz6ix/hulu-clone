import React, {useState} from 'react';
import './Footer.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Footer() {
    const [expand, setExpand] = useState(false);
    const [expandHelp, setExpandHelp] = useState(false);
    const [expandUs, setExpandUs] = useState(false);

    const handlesShow = (e) => {
        e.preventDefault();
        {expand === false? setExpand(true) : setExpand(false)}
    }

    const handlesShowHelp = (e) => {
        e.preventDefault();
        {expandHelp === false? setExpandHelp(true) : setExpandHelp(false)}
    }
    const handlesShowUs = (e) => {
        e.preventDefault();
        {expandUs === false? setExpandUs(true) : setExpandUs(false)}
    }
  return (
    <div className='footer'>
            <div className='footer__width'>
                <div className='footer__hulu'>
                    <div className='footer__text'>
                        <div className='footer__browse' onClick={handlesShow}>
                            <div className='footer__Header'>
                                <h3 className='footer__headText'>BROWSE</h3>
                                {expand? <ExpandLessIcon className='footer__textIcons' /> : <ExpandMoreIcon className='footer__textIcons' />}
                            </div>
                            <div className='footer__browseCon'>
                                <div className={`footer__browseLinks ${expand? "footer__list--expand" : "null"}`}>
                                    <a href='#'>Streaming library</a>
                                    <a href='#'>Live TV</a>
                                    <a href='#'>Live News</a>
                                    <a href='#'>Live Sports</a>
                                </div>
                                <div className={`footer__browseLinks ${expand? "footer__list--expand" : "null"}`}>
                                    <a href='#'>Tv Shows</a>
                                    <a href='#'>Movies</a>
                                    <a href='#'>Originals</a>
                                    <a href='#'>Network</a>
                                    <a href='#'>Kids</a>
                                    <a href='#'>FX</a>
                                </div>
                                <div className={`footer__browseLinks ${expand? "footer__list--expand" : "null"}`}>
                                    <a href='#'>HBO Max&trade;</a>
                                    <a href='#'>Cinemax</a>
                                    <a href='#'>Showtime</a>
                                    <a href='#'>STARY</a>
                                </div>
                                <div className={`footer__browseLinks ${expand? "footer__list--expand" : "null"}`}>
                                    <a href='#'>Hulu, Disnez+, and ESPN+</a>
                                    <a href='#'>Hulu(No Ads), Disney+, and ESPN+</a>
                                    <a href='#'>Student Discount</a>
                                </div>

                            </div>
                        </div> 
                        <div className='footer__help' onClick={handlesShowHelp} >
                            <div className='footer__Header'>
                                <h3 className='footer__headText'>HELP</h3>
                            {expandHelp? <ExpandLessIcon className='footer__textIcons' /> : <ExpandMoreIcon className='footer__textIcons' />}
                            </div>
                            <div className={`footer__list ${expandHelp? "footer__list--expand" : "null"}`} >
                                <a href='#'>Account / Billing</a>
                                <a href='#'>Plans / Pricing</a>
                                <a href='#'>Supported Devices</a>
                                <a href='#'>Accessibilitz</a>
                            </div>
                        </div> 
                        <div className='footer__aboutUs'  onClick={handlesShowUs}>
                            <div className='footer__Header'>
                                <h3 className='footer__headText'>ABOUT US</h3>
                                {expandUs? <ExpandLessIcon className='footer__textIcons' /> : <ExpandMoreIcon className='footer__textIcons' />}
                            </div>
                            <div className={`footer__list ${expandUs? "footer__list--expand" : "null"}`}>
                                <a href='#'>Shop Hulu</a>
                                <a href='#'>Press</a>
                                <a href='#'>Jobs</a>
                                <a href='#'>Contact</a>

                            </div>
                        </div>
                    </div>
                    <div className='footer__socials'>
                        <div className='footer__icons'>
                            <img alt='' src='https://www.hulu.com/static/hitch/static/icons/facebook.svg'/>
                            <img alt='' src='https://www.hulu.com/static/hitch/static/icons/twitter.svg'/>
                            <img alt='' src='https://www.hulu.com/static/hitch/static/icons/youtube.svg'/>
                            <img alt='' src='https://www.hulu.com/static/hitch/static/icons/instagram.svg'/>
                        </div>
                        <div className='footer__textFoot'>
                            <div><span> &copy;2022 Playboi, Baby</span></div>
                            <div><span>
                                <img alt='' src='https://c.evidon.com/pub/icon1.png' />
                                About Ads</span></div>
                            <div><span>Terms of Use</span></div>
                            <div><span>Privacy Policy</span></div>
                            <div><span>Do Not Sell My Personal Information</span></div>
                            <div><span>@ferdindcharles6@gmail.com</span></div>
                            <div><span>Tv Parental Guidelines</span></div>
                            <div><span>Sitemap</span></div>
                            <div><span className='footer__textLastchild'> &copy;2022 Playboi Baby, Mansion</span></div>
                        </div>
                    </div>
                </div>

            </div>
        
    </div>
  )
}

export default Footer