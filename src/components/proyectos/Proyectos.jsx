import github from './github.svg';
import globe from './globe.svg';
function Proyectos() {
  let projects = [
    {
      name: 'Color Flipper',
      desc: 'Aplicacion web que cambia de color con un evento de click',
      tech: ['JavaScript', 'HTML', 'CSS'],
      git: 'https://github.com/matiasp10/color-flipper',
      demo: 'https://matiasp10.github.io/color-flipper/',
      img: 'https://i.imgur.com/ymHpZoh.jpg',
    },
    {
      name: 'Counter',
      desc: 'Aplicacion web con un contador',
      tech: ['JavaScript', 'HTML', 'CSS'],
      git: 'https://github.com/matiasp10/counter',
      demo: 'https://matiasp10.github.io/counter/',
      img: 'https://i.imgur.com/2OMPeIa.jpg',
    },
    {
      name: 'Multiplication game',
      desc: 'Un juego donde tienes que acertar el resultado de la multiplicacion',
      tech: ['JavaScript', 'HTML', 'CSS'],
      git: 'https://github.com/matiasp10/multiplication-app',
      demo: 'https://matiasp10.github.io/multiplication-app/',
      img: 'https://i.imgur.com/42RbYP8.jpg',
    },
  ];
  return (
    <div>
      <div className="container-title">Proyectos</div>
      <div className="project-container">
        {projects.map((e) => {
          return (
            <div className="project-card">
              <img src={e.img} alt="Color flipper" className="project-img" />
              <div className="project-info">
                <p className="project-title">{e.name}</p>
                <p className="project-description">{e.desc}</p>
                <div className="project-extra">
                  <div className="project-tags">
                    {e.tech.map((e) => {
                      return <span className="tag">{e} </span>;
                    })}
                  </div>
                  <div className="project-git">
                    <a href={e.git} className="project-link">
                      <img src={github} alt="" className="git-icon" />
                    </a>
                    <a href={e.demo} className="project-demo">
                      <img src={globe} alt="" className="globe-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;
