

function Projects() {

    return (
        <div>
            <div className="project">
                <h1>My Projects</h1>
            </div>
            <div className="project">

                <div className="project-single">
                    <h3>this.Group Records</h3>



                    <img className="project-picture" src="https://i.imgur.com/kJwgMKm.png"></img>


                    <p>E-commerce site using React, Node.js, and Express. Users are able to create a login to add records to their cart and checkout. Backend constructed with SQL, and PostgreSQL.</p>
                    <a href="https://github.com/this-Group/graceShopperFrontEnd" target="_blank">GitHub</a>
                </div>
                <br></br>

                <div className="project-single">
                    <h3>Stranger's Things</h3>


                    <img className="project-picture" src="https://i.imgur.com/AWbjChI.png"></img>


                    <p>React application using routes to an API for user interaction. When logged in users can post, update, and delete ads of their own. Users can also message other users about ads. </p>
                    <a href="https://github.com/LukeLowrey2/strangers_things" target="_blank">GitHub</a>
                </div>

            </div>


            <div className="project">

                <div className="project-single">
                    <h3>Fitness Tracker</h3>
                    <img className="project-picture" src="https://i.imgur.com/vQXrNGm.png"></img>




                    <p>SPA using React and routes to an API. Users can login and collect work out routines made by other users or create their own. These routines are comprised of activities which are create by users.</p>
                    <a href="https://github.com/LukeLowrey2/Fitness_Trackr" target="_blank">GitHub</a>

                </div>
                <br></br>
                <div className="project-single">
                    <h3>Arcade Game</h3>
                    <img className="project-picture" src="https://i.imgur.com/BBKpwV2.png"></img>




                    <p>Interactive game using JavaScript, HTLM, and CSS. Players can assign their names to the board and play until a win or a draw. If players want to continue, they have the ability to reset the board with the rest button.  </p>
                    <a href="https://github.com/LukeLowrey2/Arcade" target="_blank">GitHub</a>

                </div>
                <br></br>
            </div>
        </div>
    )
};

export default Projects;