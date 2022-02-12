import React from 'react';
import OgBw from '../../assets/img/originalbw.png';
import OgC from '../../assets/img/originalCopy.png';

// styles
import './Contact.scss';

// components
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='left'>
        <ContactForm />
      </div>

      <div className='right'>
        <div className='img-wrapper'>
          <div className='img-left'>
            <img src={OgBw} alt='bw image of rob' />
          </div>

          <div className='img-right'>
            <img src={OgC} alt='color image of rob' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
