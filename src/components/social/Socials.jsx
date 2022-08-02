
import "./socials.scss";
import { BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";
import {IoIosMail} from  "react-icons/io";
import {ImProfile} from "react-icons/im";
import {SiFreelancer} from "react-icons/si";



function Socials({activeMenu}) {
    return(
        <div className={"social-icons " +  (activeMenu && "active")}>
            <a href="https://www.linkedin.com/in/wisdom-ighofose-875424128/" target={"_blank"} rel="noreferrer"><BsLinkedin className="icons" /></a>
            <a href="https://github.com/Wissy47" target={"_blank"} rel="noreferrer"><BsGithub className="icons" /></a>
            <a href="https://twitter.com/Wissy47" target={"_blank"} rel="noreferrer"><BsTwitter className="icons" /></a>
            <a href="mailto:wisdom.ighofose@gmail.com"><IoIosMail className="icons" /></a>
            <a href="https://www.freelancer.com/u/blackrockwise" target={"_blank"} rel="noreferrer"><SiFreelancer className="icons" /></a>
            <a href="./assets/resume/001_WISDOM_IGHOFOSE.pdf" download={true}><ImProfile className="icons download" /></a>
        </div>
    )
}

export default Socials;