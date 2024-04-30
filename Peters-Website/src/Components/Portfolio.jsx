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
            {/* <img className="PortImg" src="https://picsum.photos/280/300"></img><br></br> */}
            <ul className="softwareTools">
            <h2 className="header3"> Programing Languages</h2>
                <li> JavaScript</li>
                <li> NodeJs</li>
                <li> React</li>
                <li> HTML</li>
                <li> CSS</li>
                <li> SQL</li>
                <li> Redux</li>
                <li> Javascript</li>
            </ul>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt amet assumenda recusandae animi voluptatibus quos ab accusantium asperiores veritatis officia dolore laboriosam tenetur, magnam maxime quae repudiandae facilis quibusdam id. </p>
            <div className="DevPro">
                <h3 className="header3"> Development Process</h3>
                <img className="WireFrame"src="https://picsum.photos/280/300" alt=""></img>
                <p className="wireFrameTxt"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, aliquid. Aspernatur animi labore, itaque ipsum soluta modi porro necessitatibus fuga ratione molestiae distinctio repellendus, praesentium, cumque sed qui maxime quidem?</p><br></br>
                <h3 className="header3"> Workflow</h3>
                <img className="WorkFlow" src="src/Assets/Wireframe.png" alt=""></img>
                <p className="WorkFlowTxt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum pariatur ullam error delectus animi velit explicabo dolores quidem laudantium. Officia iste officiis explicabo amet asperiores non labore saepe veniam laboriosam!</p>
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