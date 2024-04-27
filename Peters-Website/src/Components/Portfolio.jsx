function Portfolio() {



    return (
        <div className="Portfolio">
            <img src=""></img>
            <h1 className="header1"> Tools </h1>
            <h2 className="header2"> Software</h2>
            <ul className="SystemTools">
                <li> This website is hosted on <a href="https://www.netlify.com/"> Netlify</a></li>
                <li>Coding: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                <li>Notes: <a href="https://obsidian.md/">Obsidian</a> </li>
            </ul>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt amet assumenda recusandae animi voluptatibus quos ab accusantium asperiores veritatis officia dolore laboriosam tenetur, magnam maxime quae repudiandae facilis quibusdam id. </p>
            <div className="DevPro">
                <h3 className="header3"> Development Process</h3>
                <img className="WireFrame"src="" alt=""></img>
                <p className="wireFrameTxt"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, aliquid. Aspernatur animi labore, itaque ipsum soluta modi porro necessitatibus fuga ratione molestiae distinctio repellendus, praesentium, cumque sed qui maxime quidem?</p>
                <h4>Workflow</h4>
                <img className="WorkFlow" src="" alt=""></img>
                <p className="WorkFlowTxt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum pariatur ullam error delectus animi velit explicabo dolores quidem laudantium. Officia iste officiis explicabo amet asperiores non labore saepe veniam laboriosam!</p>
            </div>
            <div className="card anchored">
                <div>
                    <time>2024</time>
                    <a className="cardHeader" href="https://github.com/Peters-Alex/E-Commerce">alexpeters.com</a>
                    <p>The source of this website</p>
                    
                </div>
    
            </div>
        </div>

    )
}
export default Portfolio