import "../Styles/portfolio.css";
import { PhosphorLogo } from "phosphor-react";

function Portfolio() {



    return (
        <div className="Portfolio">
            <ul className="SystemTools">
                <h2 className="header2"> Software Tools</h2>
                <li> This website is hosted on <a href="https://www.netlify.com/"> Netlify</a></li>
                <li>Coding: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                <li>Notes: <a href="https://obsidian.md/">Obsidian</a> </li>
            </ul>
            <img className="PortImg" src="https://picsum.photos/280/300"></img><br></br>
            <div className="PlContainer">
            <h2 className="header3"> Programing Languages</h2>
            <ul className="softwareTools">
                <li> JavaScript</li>
                <li> NodeJs</li>
                <li> React</li>
                <li> HTML</li>
                <li> CSS</li>
                <li> SQL</li>
                <li> Redux</li>
                <li> Javascript</li>
            </ul>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt amet assumenda recusandae animi voluptatibus quos ab accusantium asperiores veritatis officia dolore laboriosam tenetur, magnam maxime quae repudiandae facilis quibusdam id. </p>
            <div className="DevPro">
                <h3 className="header3"> Development Process</h3>
                <img className="WireFrame" src="src/Assets/GitHubProject.png" alt=""></img>
                <p className="wireFrameTxt">Leveraging GitHub's version control system empowers me to maintain project documentation and management throughout the project lifecycle. Whether engaged in pair programming or Test-Driven Development, it provides a seamless framework that enables me to address technical challenges confidently, whether as an individual contributor or within a collaborative team. These tools serve as a cornerstone for me to effectively communicate requirements, guidelines and most importantly helps me ensure project alignment and consistency.</p><br></br>
                <h3 className="header3"> Workflow</h3>
                <img className="WorkFlow" src="src/Assets/Wireframe.png" alt=""></img>
                <p className="WorkFlowTxt">
                    Designing wireframes is an integral part of my project workflow, enabling me to visualize the intricate layout, structure, and functionality of my projects. Through wireframing, I meticulously pinpoint essential requirements and features, through mapping out the User Interface and  User Experience. These wireframes serve as my guiding light, offering clarity and direction to ensure optimal efficiency and alignment with project expectations and requirements.
                </p>
            </div>
            <div className="cardanchored">
                <div>
                    <time>2024</time>
                    <a className="cardHeader" href="https://github.com/Peters-Alex/E-Commerce">alexpeters.com</a><br></br>
                    <a className="EcomWeb" href="https://trendsphere.netlifyapp/"> E-Commerce Website</a>
                    <p className="EcomWebTxt">The source of this website</p>
                    <button>Source</button>

                </div>

            </div>
        </div>

    )
}
export default Portfolio