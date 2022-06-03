import React from 'react';
import "./LoginPics.css";
import { Button, Card, CardMedia, Menu } from '@mui/material';

function LoginPics() {
  return (
    <div className='loginPics'>
        <div className='loginPics__tv'>
            <div className='loginPics__tvHead'>
                <div className='loginPics__tvContents'>
                    <span>INCLUDED IN ALL PLANS</span>
                    <h2>All The Tv You Love</h2>
                    <p>
                        Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.
                    </p>
                </div>

            </div>
            <div className='loginPics__tvCards'>
                <div className='loginPics__tvCard'>
                    <div>
                        <div className='loginPics__overlayGradient'></div>
                    <Card>
                        <CardMedia className="loginPics__tvImg" component="img" 
                        alt=''
                        image='https://www.hulu.com/static/hitch/s3/attachments/ckzix4ce0m28n1k7rwhwjufa7-ckllond4i0i9w1u7ghnu91j1b-bobsburgers-category-tile-294x450-1x-full.jpg'
                        />
                    </Card>
                    <div className='loginPics__cardOverlay'>
                        <span>Past & Current seasons</span>
                        <h3>TV Shows</h3>
                    </div>
                    </div>
                    <div>
                        <div className='loginPics__overlayGradient'></div>
                    <Card>
                        <CardMedia className="loginPics__tvImg" component="img" 
                        alt=''
                        image='https://www.hulu.com/static/hitch/s3/attachments/ckzix6os0m2cl1k7rmtowojwd-cklms7f221g6z1u6ye8eurm1e-unitedstatesvsbillieholiday-category-tile-294x450-1x-1-full.jpg'
                        />
                    </Card>
                    <div className='loginPics__cardOverlay'>
                        <span>New & Classic</span>
                        <h3>Movies</h3>
                    </div>
                    </div>

                    <div>
                        <div className='loginPics__overlayGradient'></div>
                    <Card>
                        <CardMedia className="loginPics__tvImg" component="img" 
                        alt=''
                        image='https://www.hulu.com/static/hitch/s3/attachments/ckzix9rkis6t31v5mteb3tnon-ckzix7nm8s6q01v5mrhx8mjms-cktarx0vs0o9q1w7av35olnl8-nine-perfect-strangers-category-poster-tile-294x450-2x-full-full.jpg'
                        />
                    </Card>
                    <div className='loginPics__cardOverlay'>
                        <span>Groundbreaking</span>
                        <h3>Hulu Originals</h3>
                    </div>
                    </div>

                    <div>
                        <div className='loginPics__overlayGradient'></div>
                    <Card>
                        <CardMedia className="loginPics__tvImg" component="img" 
                        alt=''
                        image='https://www.hulu.com/static/hitch/s3/attachments/ckzixaonhhgrc1k6w2bn2vte1-cktaw41ct0trg1v5yjb2aysun-billions-category-poster-tile-v1-294x450-2x-full.jpg'
                        />
                    </Card>
                    <div className='loginPics__cardOverlay'>
                        <span>Add-on</span>
                        <h3>Premiums</h3>
                    </div>
                    <span>Premium network add-ons available for an additional cost</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default LoginPics