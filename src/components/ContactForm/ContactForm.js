import {useState} from 'react';
import './ContactForm.scss'
import { FiLinkedin, FiGithub, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function ContactForm() {

        const [data, setData] = useState({
           name: '',
           email: '',
           message: '',
        });
     
        const { name, email, message } = data;
     
        const handleChange = (e) => {
           setData({ ...data, [e.target.name]: e.target.value });
        };
     
        const handleSubmit = async (e) => {
           e.preventDefault();
     
           try {
              const response = await fetch(
                 'https://v1.nocodeapi.com/name/google_sheets/kQpqstuivBoibXiL?tabId=Blad1', {
                 method: 'POST',
                 headers: {
                    'Content-Type': 'application/json',
                 },
                 body: JSON.stringify([
                    [name, email, message, new Date().toLocaleString()],
                 ]),
              }
              );
              await response.json();
              setData({ ...data, name: '', email: '', message: '' });
     
           } catch (err) {
              console.log(err);
           }
        };
    return (
        <div className='contact-form-wrapper'>
        <div className='contact-info-container'>
          <h1 className='header'>Contact Information</h1>
          <p className='contact-text'>
            Fill the form to send me a message, & I´ll get back to you within 24
            hours.
          </p>
          <div className='contact-info'>
            <span className='phone'> +46 72 310 32 33</span>
            <span className='email'>robertwagar@gmail.com</span>
            <span className='location'>Stockholm/ Sweden</span>
          </div>
          <div className='social'>
            <a
              href='https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FiLinkedin className='soc-item soc-icon' />
            </a>
    
            <a
              href='https://github.com/robonexx'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub className='soc-item soc-icon' />
            </a>
    
            <a
              href='https://facebook.com/robert.r.wagar'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FiFacebook className='soc-item soc-icon' />
            </a>
    
            <a
              href='https://www.instagram.com/r.o.b_o.n.e/'
              target='_blank'
              rel='noreferrer'
            >
              <FiInstagram className='soc-item soc-icon' />
            </a>
          </div>
        </div>
        <div className='form-container'>
          <form className='form' action='#' onSubmit={handleSubmit} >
            <section>
                <label>Name</label>
                        <input type='text'
             type='text'
             classname='form-control'
             name='name'
             autoComplete='off'
             value={name}
             onChange={handleChange}
                            required />
              <label>Email</label>
                        <input type='email'
               type='text'
               classname='form-control'
               name='email'
               autoComplete='off'
               value={email}
               onChange={handleChange}
               required/>
              <label>phone</label>
              <input type='number' required />
            </section>
            <section className='section'>
                <label>Message</label>
              <input type='textarea'
                        classname='form-control'
                        name='message'
                        autoComplete='off'
                        value={message}
                        onChange={handleChange}
                        required />
            </section>
    
                    <button 
                     type='submit'
                     value='submit'
                     className='submit-btn'>Submit</button>
            <p className='form-answer'>Thanks for Your mail!</p>
          </form>
        </div>
      </div>
    );
}
