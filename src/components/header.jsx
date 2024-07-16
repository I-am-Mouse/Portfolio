import lightMode from "../assets/images/light-mode.svg";
import darkMode from "../assets/images/dark-mode.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import instagramLogo from "../assets/images/instagram.svg";
import twitterLogo from "../assets/images/twitter.svg";
import githubLogo from "../assets/images/github.svg";
import linkedinLogo from "../assets/images/linkedin.svg";
import discordLogo from "../assets/images/discord.svg";
import whatsappLogo from "../assets/images/whatsapp.svg";
import gmailLogo from "../assets/images/gmail.svg";

import menuOpen from "../assets/images/icon-menu.svg"
import menuClose from "../assets/images/icon-close-menu.svg"

import { useState, useEffect } from "react";
import React from 'react';
import { useTheme } from "../context/darkModeContext";
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'

const Header = () => {
    
    const [isAppear, setIsAppeared] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [menuDisplay, setMenuDisplay] = useState(false);
    const [isHireMe, setHireMe] = useState(false);
    const { theme, changeTheme } = useTheme();

        const [state, handleSubmit] = useForm("xanwypoa");
        const [showAlert, setShowAlert] = useState(false);
      
        useEffect(() => {
          if (state.succeeded) {
            setShowAlert(true);
          }
        }, [state.succeeded]);
      
        useEffect(() => {
          if (showAlert) {
                        Swal.fire({
                                    title: "Thank you!",
                                    text: "Mail sent successfully",
                                    icon: "success"
                                }).then(() => {
                            setShowAlert(false);
                        });
                    }
                }, [showAlert]);

    const handleToggle = () => {
        setIsAppeared(!isAppear);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    
        const defaultBackgroundColor = '#FFFFFF';
        const alternativeBackgroundColor = '#202020';

        const handlePressed = () => {
        setIsPressed((prevIsPressed) => {
            const newIsPressed = !prevIsPressed;
            const newBackgroundColor = newIsPressed ? alternativeBackgroundColor : defaultBackgroundColor;
            changeTheme({ mainBackgroundColor: newBackgroundColor });
            localStorage.setItem('backgroundColor', newBackgroundColor);
            return newIsPressed;
        });
        };

        useEffect(() => {
        const storedBackgroundColor = localStorage.getItem('backgroundColor');
        if (storedBackgroundColor) {
            changeTheme({ mainBackgroundColor: storedBackgroundColor });
            setIsPressed(storedBackgroundColor === alternativeBackgroundColor);
        } else {
            changeTheme({ mainBackgroundColor: defaultBackgroundColor });
        }
        }, []);
        
        
    const openMenu = () => {
        setMenuDisplay(true);
    };
    const closeMenu = () => {
        setMenuDisplay(false);
    };

    const handleHireMe = () => {
        setHireMe(!isHireMe);
    };

    return(
        <header className="slide-in">
            <div>
                <article className="flex">
                    <a href="#">
                        <h1>Teju<strong>Codes</strong></h1>
                    </a>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/skills">Skills</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li id="contact-dropdown" onClick={handleToggle}>
                                <p href="#"
                                    onClick={() => handleClick()}>Contact<img src={(isClicked) ? arrowDown : arrowDown} alt="#" />
                                </p>
                                {isAppear && (
                                    <article>                                    
                                        <a href="https://www.instagram.com/yomi_lateju/" target="_blank"><img src={instagramLogo} alt="instagramLogo" />Instagram</a>
                                        <a href="https://twitter.com/OriyomiOlateju" target="_blank"><img src={twitterLogo} alt="twitterLogo" />X</a>
                                        <a href="https://github.com/I-am-Mouse" target="_blank"><img src={githubLogo} alt="githubLogo" />GitHub</a>
                                        <a href="https://www.linkedin.com/in/olateju-oriyomi-b098352b3/" target="_blank"><img src={linkedinLogo} alt="linkedinLogo" />LinkedIn</a>
                                        <a href="https://discord.com/channels/@me" target="_blank"><img src={discordLogo} alt="discordLogo" />Discord</a>
                                        <a href="https://wa.me/08064672139" target="_blank"><img src={whatsappLogo} alt="whatsappLogo" />Whatsapp</a>
                                        <a href="mailto:info@olatejuoriyomi9@gmail.com?subject=Hello!" target="_blank"><img src={gmailLogo} alt="gmailLogo" />Gmail</a>
                                    </article>
                                )}
                            </li>
                        </ul>
                    </nav>
                </article>
                <article>
                    <p id="screen-mode"><img src={(isPressed) ? lightMode : darkMode} onClick={() => handlePressed()} alt="mode" /></p>
                    <button onClick={handleHireMe}>Hire Me</button>
                    <img id="menuopen" src={menuOpen} alt="menuopen" onClick={openMenu}/>
                </article>
            </div>
            {isHireMe && (
                <form id="form" onSubmit={handleSubmit}> 
                    <div>
                        <label htmlFor="name">Full Name/Company Name:</label><br/>
                        <input type="text" id="name" name="name" required/>
                        <ValidationError prefix="Name" field="name" errors={state.errors}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label><br/>
                        <input placeholder="justme@gmail.com" id="email" type="email" name="email" required/>
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </div>
                    <div>
                        <label htmlFor="jobType">Job Type:</label><br/>
                            <select name="job-type" >
                                <option value="Full-Time Employment">Full-Time Employment</option>
                                <option value="Part-Time Employment">Part-Time Employment</option>
                                <option value="Contract">Contract</option>
                            </select>
                    </div>
                    <div>
                        <label htmlFor="jobDescription">Job Description:</label><br/>
                            <textarea cols="40" rows="7" id="message" name="message" required></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    </div>
                    <div>
                        <input type="submit" disabled={state.submitting} value="Send Mail." />
                    </div>
                </form>
            )}
            <div className={(menuDisplay) ? "open" : "close"} id="mobile-nav-bar">
                <img src={menuClose} alt="menuClose" id="menuClose" onClick={closeMenu}/>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li>Contact
                            <article>                                    
                                <a href="https://www.instagram.com/yomi_lateju/" target="_blank"><img src={instagramLogo} alt="instagramLogo" />Instagram</a>
                                <a href="https://twitter.com/OriyomiOlateju" target="_blank"><img src={twitterLogo} alt="twitterLogo" />X</a>
                                <a href="https://github.com/I-am-Mouse" target="_blank"><img src={githubLogo} alt="githubLogo" />GitHub</a>
                                <a href="https://www.linkedin.com/in/olateju-oriyomi-b098352b3/" target="_blank"><img src={linkedinLogo} alt="linkedinLogo" />LinkedIn</a>
                                <a href="https://discord.com/channels/@me" target="_blank"><img src={discordLogo} alt="discordLogo" />Discord</a>
                                <a href="https://wa.me/08064672139" target="_blank"><img src={whatsappLogo} alt="whatsappLogo" />Whatsapp</a>
                                <a href="mailto:info@olatejuoriyomi9@gmail.com?subject=Hello!" target="_blank"><img src={gmailLogo} alt="gmailLogo" />Gmail</a>
                            </article>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;