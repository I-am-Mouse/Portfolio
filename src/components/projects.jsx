import monogram from "../assets/images/website-monogram.JPG";
import tipCalculator from "../assets/images/website-tipCalculator.JPG";
import jobListing from "../assets/images/website-jobListing.JPG";
import InteractiveCard from "../assets/images/website-interactiveCard.JPG";
import IntroSection from "../assets/images/website-introSection.JPG";
import MubarakDiesel from "../assets/images/website-mubrak-diesel.JPG";
import { useTheme } from "../context/darkModeContext";

const Projects = () => {

    const {theme, changeTheme} = useTheme();

    return (
        <project className="slide-in">
            <section style={{backgroundColor: theme.mainBackgroundColor}}>
                <div id="big-div">
                    <h1>Selected <strong>Projects</strong>.</h1>
                    <div className=" flex slide-in">
                        <div>
                            <a href="https://monogram-mu.vercel.app/" target="_blank"><img src={monogram} alt="monogram" /></a>
                        </div>
                        <div>
                            <a href="https://tip-calculator-app-virid-six.vercel.app/" target="_blank"><img src={tipCalculator} alt="tipCalculator" /></a>
                        </div>
                        <div>
                            <a href="https://job-listing-two-nu.vercel.app/" target="_blank"><img src={jobListing} alt="jobListing" /></a>
                        </div>
                        <div>
                            <a href="https://interactive-card-brown.vercel.app/" target="_blank"><img src={InteractiveCard} alt="interactiveCard" /></a>
                        </div>
                    </div>
                    <h1 id="last"> Selected <strong>Client's</strong> Projects.</h1>
                    <div>
                        <div>
                            <a href="https://www.mubarakdiesel.com.ng/" target="_blank"><img src={MubarakDiesel} alt="MubarakDiesel" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </project>
    )
}

export default Projects;