import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={require(`../images/mitchellpicture.png`)} alt="Picture of Mitchell Lea"/>
                </div>
            </div>
        </div>
    );
};

export default About;