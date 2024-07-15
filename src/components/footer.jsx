
import instagramLogo from "../assets/images/instagram.svg";
import twitterLogo from "../assets/images/twitter.svg";
import githubLogo from "../assets/images/github.svg";
import linkedinLogo from "../assets/images/linkedin.svg";
import discordLogo from "../assets/images/discord.svg";
import whatsappLogo from "../assets/images/whatsapp.svg";
import gmailLogo from "../assets/images/gmail.svg";

const Footer = () => {
    return (
        <footer>
            <div>
                <h4>"Let's work together and <strong>craft a web solution that drives growth</strong> for your business."</h4>
                <article>                                  
                    <a href="https://www.instagram.com/yomi_lateju/" target="_blank"><img src={instagramLogo} alt="instagramLogo" /></a>
                    <a href="https://twitter.com/OriyomiOlateju" target="_blank"><img src={twitterLogo} alt="twitterLogo" /></a>
                    <a href="https://github.com/I-am-Mouse" target="_blank"><img src={githubLogo} alt="githubLogo" /></a>
                    <a href="https://www.linkedin.com/in/olateju-oriyomi-b098352b3/" target="_blank"><img src={linkedinLogo} alt="linkedinLogo" /></a>
                    <a href="https://discord.com/channels/@me" target="_blank"><img src={discordLogo} alt="discordLogo" /></a>
                    <a href="https://wa.me/08064672139" target="_blank"><img src={whatsappLogo} alt="whatsappLogo" /></a>
                    <a href="mailto:info@olatejuoriyomi9@gmail.com?subject=Hello!" target="_blank"><img src={gmailLogo} alt="gmailLogo" /></a>
                </article>
            </div>
            <form action="">
                
            </form>
        </footer>
    )
}

export default Footer;