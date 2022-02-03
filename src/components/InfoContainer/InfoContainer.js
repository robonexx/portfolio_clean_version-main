import { useRef, useState } from 'react';

// styles
import './InfoContainer.scss';

// info container component

export default function InfoContainer({ name, html_url, description, count, setCount }) {
  /* const [count, setCount] = useState(0) */
  const containerRef = useRef();


  /* const title = 'Project one';
  const desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
 */
  const moreInfo = (e) => {
    containerRef.current.classList.add('card-open');
  };

  const lessInfo = (e) => {
    containerRef.current.classList.remove('card-open');
  };

  return (
    <div className='cards' ref={containerRef}>
      <div className='card'>
        <div className='card-header'>
          <h2 className='card-title'>{name}</h2>
          <button className='card-more-info' onClick={moreInfo}>
            More info
          </button>
          <button className='card-less-info' onClick={lessInfo}>
            Close info
          </button>
        </div>
        <div className='card-content'>
          <div className='card-body'>
            <p className='card-desc'>{description}</p>
            <span className='card-link'>
              <a href={html_url} target='_blank' rel='noreferrer'>
                Check on Github
              </a>
            </span>
          </div>

          <div className='heart' onClick={() => setCount(count + 1)}>
            <input type='checkbox' className='heart-checkbox' />
            <div className='heart-icon' ></div>
          </div>
          <p className='likes'>Give a like <span>{count}</span></p>
        </div>
      </div>
    </div>
  );
}
