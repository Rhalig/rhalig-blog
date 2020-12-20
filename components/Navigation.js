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
            <Link href="https://github.com/Rhalig">
              <a>
                <img src="/Github.png"></img>
              </a>
            </Link>
          </div>
          <div className="spotify">
            <Link href="https://open.spotify.com/user/faseatteriufin3z0gd0ww5as?si=g_jOQjA4Q9aIUQnNkO55mA">
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
