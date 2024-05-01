import "../Styles/portfolio.css";
import {FaReact} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io"
import { TbSql } from "react-icons/tb"

function Portfolio() {
    
    const handleClick = {

    };


    return (
        <div className="Portfolio">
            <ul className="SystemTools">
                <h2 className="header2"> Software Tools</h2>
                <li> This website is hosted on <a href="https://www.netlify.com/"> Netlify</a></li>
                <li>Coding: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                <li>Notes: <a href="https://obsidian.md/">Obsidian</a> </li>
            </ul>
            <img className="PortImg" src="src/Assets/IMG_2009.jpg"></img><br></br>
            <div className="PlContainer">
            <h2 className="header3"> Programing Languages</h2>
            <ul className="softwareTools">
                <li> <FaJs/>JavaScript</li>
                <li> <FaNodeJs/>NodeJs</li>
                <li><FaReact/> React</li>
                <li><FaHtml5/> HTML</li>
                <li> <IoLogoCss3/>CSS</li>
                <li> <TbSql/>SQL</li>
                <li> <SiRedux/>Redux</li>
            </ul>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt amet assumenda recusandae animi voluptatibus quos ab accusantium asperiores veritatis officia dolore laboriosam tenetur, magnam maxime quae repudiandae facilis quibusdam id. </p>
            <div className="DevPro">
                <h3 className="header3"> Wire Frame</h3>
                <img className="WireFrame" src="src/Assets/Wireframe.png" alt=""></img>
                <p className="wireFrameTxt">                    Designing wireframes is an integral part of my project workflow, enabling me to visualize the intricate layout, structure, and functionality of my projects. Through wireframing, I meticulously pinpoint essential requirements and features, through mapping out the User Interface and  User Experience. These wireframes serve as my guiding light, offering clarity and direction to ensure optimal efficiency and alignment with project expectations and requirements.</p><br></br>
              <h3 className="header3"> Project Implementation</h3>
                <img className="WorkFlow" src="src/Assets/GitHubProject.png" alt=""></img>
                <p className="WorkFlowTxt">
                Leveraging GitHub's version control system empowers me to maintain project documentation and management throughout the project lifecycle. Whether engaged in pair programming or Test-Driven Development, it provides a seamless framework that enables me to address technical challenges confidently, whether as an individual contributor or within a collaborative team. These tools serve as a cornerstone for me to effectively communicate requirements, guidelines and most importantly helps me ensure project alignment and consistency.
                </p>  
            </div>
            <div className="cardanchored">
                <div>
                    <a className="cardHeader" href="https://github.com/Peters-Alex/E-Commerce">GitHub</a>
                    <a className="EcomWeb" href="https://trendsphere.netlify.app/"> Trendsphere</a>
                    <p className="EcomWebTxt">E-Commerce Website</p>
                    <a href="https://trendsphere.netlify.app/">
                    <button className="Portbutton" onClick={handleClick}>Source</button>
                    </a>
                </div>
            </div>
        </div>

    )
}
export default Portfolio