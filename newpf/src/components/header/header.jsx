import image from "../../assets/PhotoPerso.jpg"

function Header(){
    return(
        <div className="headerContainer">
            <img className="headerContainer-Picture" src={image} alt="photo personnelle"/>
            <div className="headerContainer-textContainer">
            <p>Bonjour, je m'appelle Julie et je suis...</p>
            <h1>Intégrateur Web</h1>
        </div>
        </div>
    )
}
export default Header