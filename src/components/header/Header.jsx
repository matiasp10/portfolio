import github from './github.svg';
import wpp from './wpp.svg';
import ig from './ig.svg';
function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <p className="title">
          Hola soy <span>Matias Petenatti</span>
        </p>
        <p className="subtitle">DESARROLLADOR WEB</p>
        <div className="social">
          <a href="https://github.com/matiasp10">
            <img src={github} alt="" />
          </a>
          <a href="https://github.com/matiasp10">
            <img src={wpp} alt="" />
          </a>
          <a href="https://github.com/matiasp10">
            <img src={ig} alt="" />
          </a>
        </div>
      </div>
      <div className="header-img">
        <img
          src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
