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

      <main className="about">
        <div >
          <img className="profile-picture" src="https://i.imgur.com/1GDgwRP.jpg" alt="Luke Lowrey Profile"></img>
        
        </div>
        <div className="about-me">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec ante a odio efficitur elementum. Nullam vel placerat lectus. Ut eleifend sodales ante, et luctus urna lobortis eget. Nullam vel lobortis erat. In gravida, nisi vel porttitor bibendum, lectus lorem mollis sem, quis cursus ex odio sed diam. Maecenas eget magna quam. Pellentesque a pellentesque nulla, id sodales sapien. Nulla laoreet risus et semper feugiat. Duis posuere justo at eros sollicitudin bibendum. Phasellus ornare, justo ut imperdiet rutrum, diam diam tincidunt elit, vitae luctus odio erat sed purus. Morbi malesuada risus non posuere dictum. Nunc turpis justo, venenatis sodales diam eget, venenatis vestibulum sapien. Morbi congue ipsum at tellus porttitor, quis eleifend est dictum. Donec ut tortor id orci sollicitudin congue. Vestibulum efficitur facilisis augue, quis consequat mi varius a.
          </p>
        </div>
      </main>

    </div>
  );
}

export default App;
