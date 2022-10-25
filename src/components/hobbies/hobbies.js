/*
*
* hobbies.js
* @author - Mazeen
* @date - 25 October, 2022
**/

import './style.css';
import Title from '../title/title';

const Hobbies = () => {
    return (
        <div class="card">
            <Title heading="Hobbies"></Title>
            <ul class="hobbies-list">
                <li><span><i class="fa-solid fa-car"></i> Driving</span></li>
                <li><span><i class="fa-solid fa-person-swimming"></i> Swimming</span></li>
                <li><span><i class="fa-solid fa-gamepad"></i> Gaming</span></li>
                <li><span><i class="fa-solid fa-futbol"></i> Football</span></li>
            </ul>
            
       </div>
    )
}

export default Hobbies;