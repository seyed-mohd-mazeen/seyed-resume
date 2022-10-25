/*
*
* languages.js
* @author - Mazeen
* @date - 25 October, 2022
**/

import './style.css';
import Title from '../title/title';
import Flag1 from '../../assets/usflag.png';
import Flag2 from '../../assets/indiaflag.png';

const Languages = () => {
    return (
        <div class="card t-left">
        <Title heading="Languages"></Title>
        <ul class="languages-list">
            <li><img src={Flag1} height="20"></img> English</li>
            <li><img src={Flag2} height="23"></img> Tamil</li>
            <li><img src={Flag2} height="23"></img> Hindi</li>
        </ul>
   </div>
    )
}

export default Languages;