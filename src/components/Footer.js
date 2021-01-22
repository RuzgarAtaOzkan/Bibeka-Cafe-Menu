import React from 'react';
import '../styles/Footer.css';
import { TiSocialInstagram } from 'react-icons/ti';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            easterEggCtr: 0
        }

        this.handleEasterEgg = this.handleEasterEgg.bind(this);
    }

    handleEasterEgg(event) {
        if (this.state.easterEggCtr < 9) {
            event.preventDefault();
        }

        this.setState({ easterEggCtr: this.state.easterEggCtr + 1 });
    }

    render() {
        console.log(this.state.easterEggCtr);
        return (
            <div className="footer__container">
                <div>
                    <a href="https://instagram.com/bibekacafe?igshid=iz7bgpt9tuxq">
                        <TiSocialInstagram style={{ fontSize: 55, color: 'black' }} /> 
                    </a> 
                </div>
                <p>
                    <a href="https://www.instagram.com/mertagcaa" onClick={this.handleEasterEgg}>Bibeka Cafe Inc. Ⓡ</a>
                </p>
                <p id="footer__designer-signature">Designed by Mert Agca & Ruzgar Ata Ozkan.</p>
            </div>
        );
    };
}

export default Footer;
