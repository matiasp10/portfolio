import js from './js.svg';
import html from './html.svg';
import css from './css.svg';
import node from './node.svg';
import react from './react.svg';

function Tech() {
  let tecnologias = [
    {
      name: 'HTML',
      img: html,
    },
    {
      name: 'JavaScript',
      img: js,
    },
    {
      name: 'CSS',
      img: css,
    },
    {
      name: 'NodeJS',
      img: node,
    },
    {
      name: 'ReactJS',
      img: react,
    },
  ];
  return (
    <div className="tech">
      <p className="tech-title">Tecnologias que utilizo</p>
      <div className="tech-container">
        {tecnologias.map((e) => {
          return (
            <div className="tech-card" id={e.name}>
              <img src={e.img} alt={e.name} />
              <p>{e.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tech;
