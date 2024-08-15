import icons from "../../data/icons"

function About(){
    return(
        <div id="a-propos" className="aboutContainer">
            <h2 className="aboutContainer-Title">A propos de moi...</h2>
            <div className="aboutContainer-Bio">
            <div className="aboutContainer-Contain">
                <p>J'ai suivi plusieurs formations, notamment en tant qu'hôtesse de caisse et aide à domicile, mais elles ne me correspondaient pas forcément car il me manquait ce côté créatif que j'aime tant. Je me suis donc intéressée au monde du web, et c'est tout naturellement que j'ai réalisé une formation d'intégrateur web chez OpenClassrooms</p>
            </div>
            <div className="aboutContainer-ToolsBox">
                <h3>Mes outils</h3>
                <div className="tools">
                {icons.map((item) => (
                    <div key={item.id} className="aboutContainer-Tools">
                        <div className="icon">{item.icon}</div>
                        <div className="iconText">{item.name}</div>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    )
}

export default About

