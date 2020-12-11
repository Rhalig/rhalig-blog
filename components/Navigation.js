import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <div className="navbar" id="navbar">
        <img className="photo" src="/Photo.jpeg"></img>
        <h2>Umut Şahin</h2>
        <h4>Front-end Developer</h4>
        <div className="social-media-icons">
          <div className="twitter">
            <Link href="https://twitter.com/rhaligdev">
              <a>
                <img src="/Twitter.png"></img>
              </a>
            </Link>
          </div>
          <div className="github">
            <Link href="https://twitter.com/rhaligdev">
              <a>
                <img src="/Github.png"></img>
              </a>
            </Link>
          </div>
          <div className="spotify">
            <Link href="https://twitter.com/rhaligdev">
              <a>
                <img src="/Spotify.png"></img>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
