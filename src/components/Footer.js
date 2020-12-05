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
                <p>Bibeka Cafe Inc. Ⓡ</p>
                <a href="#"> {/* might direct the user to my github */}
                    <p id="footer__designer-signature">Designed by Ruzgar Ata Ozkan.</p>
                </a>

            </div>
        );
    };
}

export default Footer;