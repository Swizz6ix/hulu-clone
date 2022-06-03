import React, {useState,  useEffect, useRef } from 'react';
import "./LoginLib.css";
import FlipMove from "react-flip-move";

function LoginLib() {
    const [active, setActive] = useState('')
    const defaultButton = useRef(null)

    useEffect(() => {
    defaultButton.current.click()
    
    }, [])
    

    const tabs = [
        {
            id:"tab1", 
            name: "Live Sports", 
            subHeadline: "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.", 
            image1: "https://www.hulu.com/static/hitch/s3/attachments/cka35rzv205t90wgfxa4wz4q5-cbs-sports-network-logo-1.png", 
            image2: "https://www.hulu.com/static/hitch/s3/attachments/cka358szb054x0whh8qejv0m9-espn-network-logo.png", 
            image3: "https://www.hulu.com/static/hitch/s3/attachments/cka359p4o05660whhop9o5lt5-nbc-sports-network-logo.png", 
            image4: "https://www.hulu.com/static/hitch/s3/attachments/cka35sg0905yv0wgp4ip87r7u-golf-channel-logo-0.png", 
            text: "Live TV plan required. Regional restrictions, blackouts and additional terms apply.",
            link: "See Detials",
            bckgrd: "loginLib__sportsNews"
        },

        {
            id:"tab2", 
            name: "Breaking News",  
            subHeadline: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.", 
            image1: "https://www.hulu.com/static/hitch/s3/attachments/cka35p3nn05uc0wgpnfhqdxxy-abc-news-live-network-logo.png", 
            image2: "https://www.hulu.com/static/hitch/s3/attachments/cka35pfke05ur0wgpdxhaveec-cnn-network-logo.svg", 
            image3: "https://www.hulu.com/static/hitch/s3/attachments/cka35pv5705qs0wgflaaelolw-msnbc-network-logo.png", 
            image4: "https://www.hulu.com/static/hitch/s3/attachments/cka35ppx405v60wgp6e9ybu49-foxnews-network-logo.svg", 
            text: "Live TV plan required. Regional restrictions, blackouts and additional terms apply.",
            link: "See Detials",
            bckgrd: "loginLib__breakingNews"
        },
        {
            id: "tab3", 
            name: "Biggest Events", 
            subHeadline: "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.", 
            image1: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9udpy09191v07onislhds-ckpzuowwe0pmj184yae00c9dd-emmys-logo-full.png", 
            image2: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9vr6l08uy1v4qqv9nqizi-ckpzut3390pzj183lizxdtgfg-golden-globe-logo-full.png", 
            image3: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9wmfo08gv1v4mntr796of-ckpzutn9o0pt0184yxvnzwqx2-grammys-logo-full.png", 
            image4: "https://www.hulu.com/static/hitch/s3/attachments/ckuh9xcu908hx1v4mbds1x83w-ckpzuu4j00q0z183lbsz61e4i-oscars-logo-full.png", 
            text: "Live TV plan required. Regional restrictions, blackouts and additional terms apply.",
            link: "See Detials",
            bckgrd: "loginLib__bigEvents"
        }
    ]
  return (
    //   'loginLib__spotlight loginLib__sportsNews loginLib__breakingNews loginLib__bigEvents'
    <div className='loginLib'>
        <div className='loginLin__container'>
            <FlipMove>
        {tabs.map((tab, index) => (
        <div key={tab.div} defaultChecked={index === 0} className={`loginLib__spotlight ${active===tab.id? tab.bckgrd : "loginLib__spotlight--inactive"}`}>
            <div className='loginLib__newsOuter'>
                <div className='loginLib__newsInner'>
                    <div className='loginLib__buttons'>
                        {tabs.map((tab, index) => (
                            <button><span
                            ref={defaultButton}
                            key={tab.name}
                            defaultChecked={index === 0}
                            // value={tab.id}
                            // type="button"
                            onClick={() => {setActive(tab.id)}}
                            className={`${active===tab.id? "loginLib__button--active" : "loginLib__button"}`}
                            >{tab.name}</span>
                            <div onClick={() => {setActive(tab.id)}} className={`${ active===tab.id?'loginLib__activebar' : 'loginLib__activebar--inactive'}`}></div>
                            </button>
                        ))}
                        
                    </div>

                    <div className='loginLib__contents'>
                        <div key={tab} className={`${active===tab.id?'loginLib__contentsContainer' : 'loginLib__contentContainer--inactive'}`}>
                            <div className='loginLib__contentsHeadline'>
                                <span>{tab.name}</span>
                            </div>
                            <div className='loginLib__contentsSubHead'>
                                <span>{tab.subHeadline}
                                </span>
                            </div>
                            <div className='loginLib__img'>
                                <div>
                                    <img alt='logo' src={tab.image1} />
                                </div>
                                <div>
                                    <img alt='logo' src={tab.image2} />
                                </div>
                                <div>
                                    <img alt='logo' src={tab.image3} />
                                </div>
                                <div>
                                    <img alt='logo' src={tab.image4} />
                                </div>

                            </div>
                            <div className='loginLib__text'>
                                <p>
                                    {tab.text} <a href='#'>{tab.link}</a>
                                </p>
                            </div>
                        </div>

                        {/* <div className='loginLib__contentsContainer'>
                            <div className='loginLib__contentsHeadline'>
                                <span>Breaking News</span>
                            </div>
                            <div className='loginLib__contentsSubHead'>
                                <span>Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.
                                </span>
                            </div>
                            <div className='loginLib__img'>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/cka35p3nn05uc0wgpnfhqdxxy-abc-news-live-network-logo.png' />
                                </div>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/cka35pfke05ur0wgpdxhaveec-cnn-network-logo.svg' />
                                </div>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/cka35pv5705qs0wgflaaelolw-msnbc-network-logo.png' />
                                </div>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/cka35ppx405v60wgp6e9ybu49-foxnews-network-logo.svg' />
                                </div>

                            </div>
                            <div className='loginLib__text'>
                                <p>
                                    Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a href='#'>See Detials</a>
                                </p>
                            </div>
                        </div> */}

                        {/* <div className='loginLib__contentsContainer'>
                            <div className='loginLib__contentsHeadline'>
                                <span>Big Events</span>
                            </div>
                            <div className='loginLib__contentsSubHead'>
                                <span>Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.
                                </span>
                            </div>
                            <div className='loginLib__img'>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/ckuh9udpy09191v07onislhds-ckpzuowwe0pmj184yae00c9dd-emmys-logo-full.png' />
                                </div>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/ckuh9vr6l08uy1v4qqv9nqizi-ckpzut3390pzj183lizxdtgfg-golden-globe-logo-full.png' />
                                </div>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/ckuh9wmfo08gv1v4mntr796of-ckpzutn9o0pt0184yxvnzwqx2-grammys-logo-full.png' />
                                </div>
                                <div>
                                    <img alt='logo' src='https://www.hulu.com/static/hitch/s3/attachments/ckuh9xcu908hx1v4mbds1x83w-ckpzuu4j00q0z183lbsz61e4i-oscars-logo-full.png' />
                                </div>

                            </div>
                            <div className='loginLib__text'>
                                <p>
                                    Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a href='#'>See Detials</a>
                                </p>
                            </div>
                        </div> */}
                    </div>

                </div>

            </div>

        </div> 
        ))}
        </FlipMove>
        </div>
    </div>
  )
}

export default LoginLib