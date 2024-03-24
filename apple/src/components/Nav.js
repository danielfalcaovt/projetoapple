import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="mac">
           MAC
          </Link>
        </li>
        <li>
          <Link to="smartwatch">
            SMARTWATCH
          </Link>
        </li>
        <li>
          <Link to="news">
            NEWS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
