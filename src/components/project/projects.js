/*
*
* projects.js
* @author - Mazeen
* @date - 25 October, 2022
**/
import './style.css';
import Title from '../title/title';

const Projects = () => {
    return (
        <div class="card">
        <Title heading="Projects"></Title>
        <div class="row">
                <div class="cell-70w">
                    <ul class="project-list">
                        <li><i class="fa-solid fa-money-check-dollar"></i></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="project-list">
                        <li>
                            <h4>Tips Calculator</h4>
                            <p>As per the inputs of the user, the calculator generates a tip for the serving person.</p>
                            <a href="https://github.com/seyed-mohd-mazeen/Tips-Calculator" target="blank">Visit Github <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="cell-70w">
                    <ul class="project-list">
                        <li><i class="fa-solid fa-calculator"></i></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="project-list">
                        <li>
                            <h4>BMI Calculator</h4>
                            <p>BMI is a fairly reliable indicator of body fatness for most people.</p>
                            <a href="https://github.com/seyed-mohd-mazeen/BMI-calculator" target="blank">Visit Github <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="cell-70w">
                    <ul class="project-list">
                        <li><i class="fa-brands fa-slack"></i></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="project-list">
                        <li>
                            <h4>Slack Page</h4>
                            <p>Created a replica of Slack Connect page using HTML & CSS.</p>
                            <a href="https://github.com/seyed-mohd-mazeen/slack" target="blank">Visit Github <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="cell-70w">
                    <ul class="project-list">
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="project-list">
                        <li>
                            <h4>Whatsapp Feature Page (Using ReactJs)</h4>
                            <p>Recreated the Whatsapp Feature page using ReactJs</p>
                            <a href="https://github.com/seyed-mohd-mazeen/whatsapp-feature-page" target="blank">Visit Github <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
    )
}

export default Projects;