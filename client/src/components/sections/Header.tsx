import React from 'react';
import Container from '../utils/Container';
import github from '../../svg/github.svg';

function Header() {
    return (
        <header>
            <Container>
                <div className="header">
                    <h1>Tech Tracker</h1>
                    <a
                        href="https://github.com/MichaelFarquhar/tech-tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="Github icon" width={35} height={35} />
                    </a>
                </div>
            </Container>
        </header>
    );
}

export default Header;
