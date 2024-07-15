// import { useState } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import Mouse from "../assets/images/mouse.jpg";
import { useTheme } from "../context/darkModeContext";
// import resume from "../assets/Resume/Resume.jpg";


const Main = () => {

    const {theme, changeTheme} = useTheme();
    // const [red, setRed] = useState(false);

    return (
        <div style={{backgroundColor: theme.mainBackgroundColor}} id="main-big-div">
            <main className="slide-in">
                <div className="flex">
                    <article>
                        {/* <article className="marquee-container"> */}
                            {/* <article className="marquee-content">
                                <h5>&#x2605;"Skills speaks Louder than Words"&#x2605;.</h5>
                            </article> */}
                            <marquee behavior="" direction="left"><h5>&#x2605;"Skills speaks Louder than Words"&#x2605;.</h5></marquee>
                        {/* </article> */}
                        <h1>Hi, I am <span>Olateju Oriyomi</span>.</h1>
                        <p>As a <strong>Front-end Developer</strong>, I specialize in crafting visually stunning and highly interactive user interfaces
                            for <strong>web applications</strong>. With a focus on <strong>Front-end Development</strong>, I am able to deliver user-friendly, responsive, 
                            and optimized <strong>UI/UX solutions</strong> that meet your business needs.</p>
                            <a href="resume.jpg" download="Olateju_Oriyomi_Resume">
                                Download Resume
                            </a>
                    </article>
                    <img src={Mouse} alt="mouse img" />
                </div>
            </main>
        </div>
    )
}

export default Main;