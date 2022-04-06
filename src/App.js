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
          Throughout my life I’ve found joy and magic when creating or editing websites with code. Be it making my Myspace page fit my everchanging personality as a kid, expanding my knowledge of design and responsiveness in my Interactive Media Program, or building a graphic design portfolio to show off my work. I always found coding to be spectacular and rewarding. After learning the tools to create functionality between the front and back end of an application, I’m excited to see where my future will take me. A future geared toward helping and expanding my community and the world through web development. 

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
          <p>SPA using React and routes to an API. Users can login and collect work out routines made by other users or create their own. These routines are comprised of activities which are create by users.  </p>
          <a href="https://github.com/LukeLowrey2/Fitness_Trackr" target="_blank"><img className="project-picture" src="https://i.imgur.com/vQXrNGm.png"></img></a>
        </div>
        <br></br>
        <div className="project-single">
          <h3>Arcade Game</h3>
          <p>Interactive game using JavaScript, HTLM, and CSS. Players can assign their names to the board and play until l there is a winner or a draw. If players want to continue, they have the ability to reset the board with the rest button.  </p>
          <a href="https://github.com/LukeLowrey2/Arcade" target="_blank"><img className="project-picture" src="https://i.imgur.com/BBKpwV2.png"></img></a>
        </div>
        <br></br>
      </div>

      <div className="resume">
        <div>
          <h2><strong>Technical Skills</strong></h2>
          <p><b>Proficient:</b> JavaScript, CSS3, HTML5, React, Node.js, Git, PostgreSQL, APIs, Postico, Postman </p>
          <p><b>Knowledgeable:</b> SQL, Bootstrap, Express, Heroku, jQuery, Flexbox</p>
          <p><b>Media:</b> Illustrator, Photoshop, InDesign, Premiere Pro, Audition, Procreate</p>
          <p><strong>Professional Skills: </strong>Adobe CC, Digital Art, Copywriting, Video Production, Project Management, Social Media Management</p>
          <h2><strong>Education</strong></h2>
          <p><b>Full Stack Web Development - </b><em>University of San Diego, Fullstack Academy</em></p>
          <p><b>Interactive Media Certificate - </b><em>San Diego Continuing Education</em></p>
          <p><b>Bachelor of Science in Mass Communication - </b><em>University of West Georgia, Carrollton, GA</em></p>
        </div>
        

        <div>
          <h2><strong>Experience</strong></h2>
          <p><b>Digital Media Producer - </b><em>Interim HealthCare, 2016 - Present </em></p>
          <ul>
            <li>Create marketing deliverables using graphic design software and fundamentals used for 125+ accounts</li>
            <li>Monitor and moderate community engagement, reviews, and trends for a consumer brand</li>
            <li>Liaise with cross-functional teams to develop multi-media projects increasing content by 150%</li>
            <li>Manage and schedule content for company’s social channels adding to reach by 1,600 views</li>
          </ul>

          <p><b>Promotions Assistant - </b><em>Pacific San Diego Magazine, 2013 - 2016 </em></p>
          <ul>
            <li>Create marketing deliverables using graphic design software and fundamentals used for 125+ accounts</li>
            <li>Monitor and moderate community engagement, reviews, and trends for a consumer brand</li>
            <li>Liaise with cross-functional teams to develop multi-media projects increasing content by 150%</li>
            <li>Manage and schedule content for company’s social channels adding to reach by 1,600 views</li>
          </ul>

          <p><b>News Director - </b><em>The WOLF Internet Radio, 2010 - 2012 </em></p>
          <ul>
            <li>Wrote proposal for station’s news department, creating it from the ground up </li>
            <li>Sought out and assigned news stories to team of 7 correspondents</li>
            <li>Constructed and anchored daily news segments with Adobe Audition</li>
          </ul>

        </div>
      </div>


      <footer>
        <br></br>
      </footer>

    </div>
  );
}

export default App;
