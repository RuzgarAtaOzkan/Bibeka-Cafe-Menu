import React from 'react';
import '../styles/Footer.css';
import { TiSocialInstagram } from 'react-icons/ti';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer__container">   
                <div>
                    <a href="https://instagram.com/bibekacafe?igshid=iz7bgpt9tuxq">
                        <TiSocialInstagram /> 
                    </a> 
                </div>
                <p>Agca Inc. </p>
            </div>
        );
    };
}

export default Footer;