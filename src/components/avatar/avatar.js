/*
*
* avatar.js
* @author - Mazeen
* @date - 25 October, 2022
**/
import './style.css';
import avatar from '../../assets/avatar.png';

const Avatar = () => {
    return (
        <div class="avatar-bg">
            <img class="avatar" src={avatar} alt="avatar" width="250"></img>
        </div>
    )
}

export default Avatar;