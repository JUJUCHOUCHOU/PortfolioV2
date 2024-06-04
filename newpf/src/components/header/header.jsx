import image from "../../assets/PhotoPerso.jpg"

function Header(){
    return(
        <div className="headerContainer">
            <img className="headerContainer-Picture" src={image} alt="photo personnelle"/>
            <p className="headerContainter-Text">Je suis</p>
            <h1 className="headerContainer-Title">Intégrateur Web</h1>
        </div>
    )
}
export default Header