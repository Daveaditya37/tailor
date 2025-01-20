import './globals.css'
export default function Nav() {
  return (
    <div className="nav">
      <nav>
        <ul className="nav3">
          <li>Tailor.</li>
        </ul>
        <ul className="nav1">
          <li><a>Home </a></li>
          <li><a>About </a></li>
          <li><a>Services </a></li>
          <li id="info6" className="dropdown">
            <a>Blog </a>
            <ul className="dropdown-content">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Blog Details</a></li>
              <li><a href="#">Element</a></li>
            </ul>
          </li>
          <li><a>Contact</a></li>
        </ul>
        <ul className="nav2">
          <li>VISIT US</li>
        </ul>
      </nav>
    </div>
  );
}
