import image from "../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg";

function Header(){
    return(
        <div className="headerContainer">
            <img className="headerContainer-Picture" src={image} alt="photo prise sur le site unsplash"/>
            <div className="headerContainer-textContainer">
            <p>Bonjour, je m'appelle Julie et je suis...</p>
            <h1>Intégrateur Web</h1>
        </div>
        </div>
    )
}
export default Header