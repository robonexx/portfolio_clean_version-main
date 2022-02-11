import { useState, useEffect } from 'react';
import './Projects.scss';
import { motion } from 'framer-motion';
// componets
import InfoContainer from '../../components/InfoContainer/InfoContainer';

const Projects = () => {
  const [count, setCount] = useState(0);
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const res = await fetch(
     /*  'https://api.github.com/users/robonexx/repos?per_page=5&sort=updated:asc' */
     'https://api.github.com/users/robonexx/repos?&per_page=5&sort=updated&direction=desc:asc'
    );
    const data = await res.json();
    console.log(data);
    setRepos(data);
  }, []);

  return (
    <motion.div className='projects-page'>
      <div className='project-section'>
        <div className='project-headline'>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.6 }}
            className='project-section-title title'
          >
            Projects
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className='project-section-sub-title'
          >
            <em>You are welcome to check </em>
            <strong>some of my projects</strong> on my github
          </motion.h2>
        </div>

        {/*  <InfoContainer  /> */}
        {repos.map(({ name, html_url, description, id }) => {
          return (
            <InfoContainer
              name={name}
              html_url={html_url}
              description={description}
              key={id}
              count={count}
              setCount={setCount}
            />
            /*  <div className="card" key={id}>
                                            <div className="card-title">{name}</div><div className="card-bar"><div className="emptyBar"></div><div className="filledBar"></div></div>
                                            <div className="card-info">{description}</div>
                                                
                                                    <button onClick={()=> window.open(html_url, "_blank")} className="repoBtn">Check</button>
                                                
                                            </div> */
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
