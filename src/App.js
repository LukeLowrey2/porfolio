import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Luke Lowrey II
          </p>
        </div>
        <div className="header-right">
          <div>
            Portfolio
          </div>
          <br></br>
          <div>
            Resume
          </div>
        </div>
      </header>

      <div>
        {/* Banner Image */}
      </div>

      <div className="about">
        
          <img className="profile-picture" src="https://i.imgur.com/1GDgwRP.jpg" alt="Luke Lowrey Profile"></img>
          
         <div className="about-me">
           <h3>
             A Little About Me
           </h3>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec ante a odio efficitur elementum. Nullam vel placerat lectus. Ut eleifend sodales ante, et luctus urna lobortis eget. Nullam vel lobortis erat. In gravida, nisi vel porttitor bibendum, lectus lorem mollis sem, quis cursus ex odio sed diam. Maecenas eget magna quam. Pellentesque a pellentesque nulla, id sodales sapien. Nulla laoreet risus et semper feugiat. Duis posuere justo at eros sollicitudin bibendum. Phasellus ornare, justo ut imperdiet rutrum, diam diam tincidunt elit, vitae luctus odio erat sed purus. Morbi malesuada risus non posuere dictum. Nunc turpis justo, venenatis sodales diam eget, venenatis vestibulum sapien. Morbi congue ipsum at tellus porttitor, quis eleifend est dictum. Donec ut tortor id orci sollicitudin congue. Vestibulum efficitur facilisis augue, quis consequat mi varius a.
            
          </p>
          </div>
        
      </div>
      <div className="project">
      <h1>My Projects</h1>
      </div>
      <div className="project">
        
        <div className="project-single">
        <h3>this.Group Records</h3>
        <p>E-commerce site using React, Node.js, and Express. Users are able to create a login to add records to their cart and checkout. Backend constructed with SQL, and PostgreSQL.</p>
        <a href="https://github.com/this-Group/graceShopperFrontEnd" target="_blank"><img className="project-picture" src="https://i.imgur.com/kJwgMKm.png"></img></a>
        </div>
        <br></br>
        <div className="project-single">
        <h3>Stranger's Things</h3>
        <p>React application using routes to an API for user interaction. When logged in users can post, update, and delete ads of their own. Users can also message other users about ads. </p>
          <a href="https://github.com/LukeLowrey2/strangers_things" target="_blank"><img className="project-picture" src="https://i.imgur.com/AWbjChI.png"></img></a>
        </div>
        <br></br>
        <div className="project-single">
        <h3>Fitness Tracker</h3>
        <p>SPA using React and routes to an API. Users can login and collect work out routines made by other users or create their own. These routines are comprised of activities which are create by users. These activates can be added or removed from a the user’s routines. </p>
        <a href="https://github.com/LukeLowrey2/Fitness_Trackr" target="_blank"><img className="project-picture" src="https://i.imgur.com/vQXrNGm.png"></img></a>
        </div>
        <br></br>
        <div className="project-single">
          <h3>Arcade Game</h3>
        <p>Interactive game using JavaScript, HTLM, and CSS. Players can assign their names to the board and play until l there is a winner or a draw. The outcome of the game is displayed above the board. If players want to continue they have the ability to reset the board with the rest button. </p>
        <a href="https://github.com/LukeLowrey2/Arcade" target="_blank"><img className="project-picture" src="https://i.imgur.com/BBKpwV2.png"></img></a>
        </div>
        <br></br>
      </div>

    </div>
  );
}

export default App;
