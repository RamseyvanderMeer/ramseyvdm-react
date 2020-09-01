import React from 'react';
import '../../css/project.css'
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Project(props) {
    return (
        <div className="project">
            <div className="project__card">
                <div className="project__text">
                    <Typography className="project__title" variant="h3">{props.title}</Typography>
                    <Typography className="project__description" variant="body1">{props.description}</Typography>
                    <a alt="github" className="project__icon-padding" href="https://github.com/RamseyvanderMeer"><GitHubIcon style={{ fontSize: 30 }} className="project__icon" /></a>
                </div>
                <div className="project__container">
                    <img className="project__image" src={require('../../img/project/' + props.imgPath + '.jpg')} alt="image" />
                </div>
            </div>
        </div>
    )
}