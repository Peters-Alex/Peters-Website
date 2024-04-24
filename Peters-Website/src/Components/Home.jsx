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
            <img className="img2" src="src/Assets/HeadShot.png" />
            <p className="imgtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt amet assumenda recusandae animi voluptatibus quos ab accusantium asperiores veritatis officia dolore laboriosam tenetur, magnam maxime quae repudiandae facilis quibusdam id. </p>
            <section className="Pillars">
                <h1 className="h1Home">What continues to inspire me </h1>
                <div className="homeDiv">
                    <img className="img1home" src="https://picsum.photos/300"/> 
                    <button className="homeButton" onClick={() => toggleDetails('People')}>People</button>
                    {showDetails['People'] && (
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, facilis at doloremque fugiat maxime rem praesentium quae! At, sapiente repellendus optio in omnis iste dolorem veritatis, molestiae molestias, commodi neque?</p>
                        )}
                </div>
                <div className="homeDiv">
                    <img className="img3home" src="https://picsum.photos/300"/> <br></br>
                    <button className="buttom1homeimg3" onClick={() => toggleDetails('engineering')}> Engineering</button>
                    {showDetails['engineering'] && (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores temporibus deleniti distinctio, veritatis est tenetur nostrum consequuntur provident! Voluptatibus excepturi consequuntur quia eveniet minima quidem facilis. Illo, laborum earum.</p>
                    )};
                </div>
                <div className="homeDiv">
                    <img className="img3home" src="https://picsum.photos/300"/> 
                    <button className="buttom1homeimg3" onClick={() => toggleDetails('data')}> Data</button>
                    {showDetails['data'] && (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores temporibus deleniti distinctio, veritatis est tenetur nostrum consequuntur provident! Voluptatibus excepturi consequuntur quia eveniet minima quidem facilis. Illo, laborum earum.</p>
                    )};
                </div>

            </section>
        </div>
            
    )
}
export default Home