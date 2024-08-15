function Skills() {
    return (
        <div id="competences">
            <h2>Compétences</h2>
            <div className="skillsContainer">
            <div className="competence">
                <h3>Conception Responsive</h3>
                <i class="fa-solid fa-mobile-screen"></i>
                <p>
                    Maîtriser l'art de la conception responsive permet de créer des sites web qui s'adaptent parfaitement à tous les types d'écrans, qu'il s'agisse de téléphones, de tablettes ou d'ordinateurs de bureau. Grâce à l'utilisation de CSS3, de flexbox et de frameworks comme Bootstrap, je m'assure que chaque site offre une expérience utilisateur optimale sur tous les appareils.
                </p>
            </div>
            <div className="competence">
                <h3>Développement Front-End Moderne</h3>
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>
                    Avec une expertise dans des technologies telles que React, je construis des interfaces utilisateur dynamiques et réactives. En combinant JavaScript, HTML5 et CSS3, je crée des applications web interactives qui offrent une expérience utilisateur fluide et engageante.
                </p>
            </div>
            <div className="competence">
                <h3>Optimisation des Performances</h3>
                <i class="fa-solid fa-person-running"></i>
                <p>
                L'optimisation des performances est essentielle pour des sites web rapides et fluides. J'utilise la minification des fichiers, le redimensionnement et l'optimisation des images en formats modernes comme WebP, ainsi que des outils comme Lighthouse pour analyser et améliorer continuellement les performances, assurant ainsi une expérience utilisateur optimale.
                </p>
            </div>
            </div>
        </div>
    );
}

export default Skills;
