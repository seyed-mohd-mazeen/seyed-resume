/*
*
* index.js
* @author - Mazeen
* @date - 25 October, 2022
**/

import './style.css';
import Header from '../header/header';
import Profile from '../profile/profile';
import Skills from '../skills/skills';
import Certification from '../certifications/certification';
import Social from '../social/social';
import Projects from '../project/projects';
import Education from '../education/education';
import Hobbies from '../hobbies/hobbies';
import Languages from '../languages/languages';

const Resume = () => {
    return (
        <div>
            <Header/>
            <div class="content-container">
                <Profile/>
                <div class="row">
                    <div class="cell-1">
                        <Skills/>
                    </div>
                    <div class="cell-1">
                        <Certification/>
                    </div>
                </div>
                <Social/>
                <div class="row">
                    <div class="cell-1">
                        <Projects/>
                    </div>
                    <div class="cell-1">
                        <Education/>
                    </div>
                </div>
                <div class="row">
                    <div class="cell-1">
                        <Hobbies/>
                    </div>
                    <div class="cell-500w">
                        <Languages/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;