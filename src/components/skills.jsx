import Programmer from "../assets/images/programmer.png";
import mark from "../assets/images/correct.png";
import HTML from "../assets/images/html-5.png";
import CSS from "../assets/images/css-3.png";
import javaLogo from "../assets/images/java-script.png";
import react from "../assets/images/react.png";
import { useTheme } from "../context/darkModeContext";


const Skills = () => {

    const {theme, changeTheme} = useTheme();

    return (
            <skill className="slide-in">
                <section  style={{backgroundColor: theme.mainBackgroundColor}}>
                    <div className="flex slide-in">
                        <article>
                            <img src={Programmer} alt="programmer-img" />
                            <h2>My skills are tailored to meet your needs</h2>
                            <p>As a seasoned frontend developer, I specialize in crafting exceptional user experiences and interfaces that drive engagement 
                                and conversion. With a strong background in Frontend Development, Responsive Web Design, and UI/UX, I deliver high-quality, 
                                scalable, and visually stunning web applications that meet and exceed client expectations..</p>
                        </article>
                        <h1>Crafting <strong>Seamless Digital</strong> Experiences.</h1>
                    </div>
                    <div>
                        <h1>Crafting web solutions that drives growth.</h1>
                        <div className="flex">
                            <article>
                                <img src={mark} alt="mark-img" />
                                <h1>Frontend Development</h1>
                                <p>My expertise in Frontend Development involves creating visually appealing and user-friendly interfaces that provide a 
                                    seamless user experience. I am proficient in HTML, CSS, JavaScript and frameworks like React.</p>
                            </article>
                            <article>
                                <img src={mark} alt="mark-img" />
                                <h1>User Interface Design</h1>
                                <p>In User Interface Design, I prioritize usability, accessibility, and aesthetics, creating interfaces that are not only 
                                    visually appealing but also intuitive and easy to use.</p>
                            </article>
                            <article>
                                <img src={mark} alt="mark-img" />
                                <h1>Responsive Design</h1>
                                <p>I excel in Responsive Design, ensuring that your website or web application looks great and functions well on any device, 
                                    from desktops and laptops to tablets and smartphones.</p>
                            </article>
                            <article>
                                <img src={mark} alt="mark-img" />
                                <h1>Custom Web Solutions</h1>
                                <p>With Custom Web Solutions, I focus on delivering tailored frontend solutions that meet your unique business needs, providing a 
                                    competitive edge in the market.</p>
                            </article>
                        </div>
                    </div>
                    <div>
                        <h1>Technologies i use <strong>PRAGMATICALLY</strong>.</h1>
                        <article>
                            <img src={HTML} alt="logo" />
                            <img src={CSS} alt="logo" />
                            <img src={javaLogo} alt="logo" />
                            <img src={react} alt="logo" />
                        </article>
                    </div>
                </section>
            </skill>
    )
}

export default Skills;