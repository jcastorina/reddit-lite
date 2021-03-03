import './Nav.css';

export const Nav = ({ onClick }: { onClick: () => void }) => (
  <nav data-testid="nav-container">
    <span id="logo-wrapper">
      <img
        src="reddit-lite-favicon.png"
        alt="logo"
        id="logo"
        data-testid="nav-logo"
        onClick={onClick}
      ></img>
      <h1 id="home" data-testid="nav-header" onClick={onClick}>
        Reddit Lite
      </h1>
    </span>
  </nav>
);
