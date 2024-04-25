import "../Styles/home.css"
import { useState } from "react"

function Home() {
    const [showDetails, setShowDetails] = useState({})

    const toggleDetails = (pillar) => {
        setShowDetails(prevState => ({
            ...prevState,
            [pillar]: !prevState[pillar]
        }));
    };

    return (
        <div className="Home">
            <header className="HeaderHome"> “The technology you use impresses no one. The experience you create with it is everything.” - Sean Gerety </header>
            <img className="img1" src="src/Assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg" /><br></br>
            <img className="img1x" src="src/Assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg" /><br></br>
            <img className="img2" src="src/Assets/HeadShot.png" />
            <h1 className="imgTitle1">Alex L. Peters</h1>
            <h2 className="imgTitle2">Full Stack Software Engineer</h2>
            <p className="imgtext"> The spark that ignited my passion for software development first ignited during my time as a Technical Recruiter. Exposure to the dynamic world of software development set me on a journey of exploration and discovery. The more I learned, the clearer it became that my tenacity for continuous learning and growth resonated deeply with the fundamental principles of software development.
            From tackling complex problems to adapting to ever-evolving technologies, and navigating the intricacies of the development process. Moreover, my ability to effectively communicate technical concepts to non-technical individuals empowers me to make meaningful contributions that bridge the gap between technical and non-technical professionals. However, what excites me most about engineering is the opportunity to inspire, create, and make a difference within technology.
 </p>
            <section className="Pillars">
                <h1 className="h1Home">What continues to inspire me </h1>
                <div className="homeDiv">
                    <img className="img1home" src="https://picsum.photos/275/300"/> <br></br>
                    <button className="homeButton" onClick={() => toggleDetails('People')}>People</button>
                    {showDetails['People'] && (
                        <p>What makes people so indispensable is the diverse perspectives we share and the relationships that we build. These are the driving factors behind effective collaboration and innovation for personal and organizational growth. Personally, I believe that a collective group of individuals will always birth innovation and creativity. </p>
                        )}
                </div>
                <div className="homeDiv">
                    <img className="img3home" src="https://picsum.photos/300"/> <br></br>
                    <button className="buttom1homeimg3" onClick={() => toggleDetails('engineering')}> Technology</button>
                    {showDetails['engineering'] && (
                        <p>Technology is the future of tomorrow due to its ability to drive innovation, foster global connectivity, and fuel economic growth. Its limitless potential is essential to shaping a brighter and more prosperous future for humanity. Technology and humanity are forever intertwined and as it continues to evolve, I embrace the benefits as well as the challenges that come with it. </p>
                    )}
                </div>
                <div className="homeDiv">
                    <img className="img3home" src="https://picsum.photos/280/300"/> <br></br>
                    <button className="buttom1homeimg3" onClick={() => toggleDetails('data')}> Data</button>
                    {showDetails['data'] && (
                        <p>Data has the capabilities to uncover correlations within our present, and predict future possibilities. In this game of life, data guides business decisions and shapes outcomes through strategic storytelling. The power of data fosters transparency and accountability for people and organizations alike. For me, data serves as the unsung hero in solving complex problems.</p>
                    )}
                </div>
            </section>
            <section className="SecondPillar">
                <div className="Message">
                    <h1 className="Messageheader">Message</h1>
                    <p className="Message">Time is undeniably the most precious resource we possess. I appreciate you investing your valuable time in exploring my page and gaining insights into who I am and my values as an individual. Should you desire to dive deeper into my background or collaborate on a project, please feel confident in reaching out to me via alexpeters59@gmail.com at your convenience. </p><br></br>
                </div>

            </section>
        </div>
            
    )
}
export default Home