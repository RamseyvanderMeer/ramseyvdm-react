import React from 'react';
import '../../css/background.css'
import ramsey from '../../img/ramsey.jpg'
import ramseyHead from '../../img/ramseyHead.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Background() {
    return (
        <div className="background">
            <div class="background__container">
                <img alt="profile" className="background__image" src={ramsey} />
            </div>
            <div className="background__card">
                <p className="background__card__name" >Ramsey van der Meer</p>
                <img alt="ramsey" className="background__card__profile" src={ramseyHead} />
                <p className="background__card__body">
                    Hello! My name is Ramsey van der Meer, and I am a senior at Menlo Atherton High School. Outside of school I am passionate about photography, computer science, hardware, the outdoors, and finance.
                </p>
                <div className="background__icon-container">
                    <a alt="linkedin" className="background__icon-padding" href="http://www.linkedin.com/in/ramseyvandermeer"><LinkedInIcon className="background__icon" /></a>
                    <a alt="instagram" className="background__icon-padding" href="https://www.instagram.com/ramsey_photos/"><InstagramIcon className="background__icon" /></a>
                    <a alt="github" className="background__icon-padding" href="https://github.com/RamseyvanderMeer"><GitHubIcon className="background__icon" /></a>
                </div>

            </div>
        </div>
    )
}