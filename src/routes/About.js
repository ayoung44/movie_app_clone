import React from 'react';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedome is ..."
            </span>
            <span>
                - Orwell, 1994
            </span>
        </div>
    );
}

export default About;