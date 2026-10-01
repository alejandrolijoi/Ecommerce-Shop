import './Header.css'

export const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <img src="/favicon.svg" alt="Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}