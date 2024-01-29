
import "./GetToKnowUs.css"
import firstImage from "../../assets/gettoknowus1.png"
import secondImage from "../../assets/gettoknowus2.png"
const GetToKnowUs = () => {
    return (
        <div className="get-to-know-us-container">
            <h3 className="text-title margin-bottom">Get to know <span className="special-text">us</span></h3>
            <div className="row">
                <div><img src={firstImage} alt="Teamwork session" className="get-to-know-us-image" /></div>
                <div className="text-container">
                    <h3 className="text-title">
                        <span className="special-text">Teamwork </span>
                        is the key to <br />
                        our sucess</h3>
                    <p className="text-description first-row-text-width">At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
                </div>
            </div>
            <div className="row row-reverse">
                <div className="text-container">
                    <h3 className=" text-title">We are all in for the <br /> <span className="special-text">enviroment</span></h3>
                    <p className="text-description">TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. </p>
                </div>
                <div><img src={secondImage} alt="Working Environment meeting" className="get-to-know-us-image" /></div>
            </div>
        </div>
    );
};

export default GetToKnowUs;