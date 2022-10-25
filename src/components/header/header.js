/*
*
* header.js
* @author - Mazeen
* @date - 25 October, 2022
**/
import './style.css';
import Avatar from '../avatar/avatar';

const Header = () => {
    return (
        <header>
            <div class="row">
                <div class="cell-1 t-right">
                    <ul class="header-list">
                        <li><a href="tel:+918870308143">+91-88703-08143 <i class="fa-solid fa-phone"></i></a></li>
                        <li><a href="mailto:mazeen99@outlook.com">mazeen99@outlook.com <i class="fa-solid fa-envelope"></i></a></li>
                    </ul>
                </div>
                <div class="cell-230w">
                    <Avatar/>
                </div>
                <div class="cell-1 t-left">
                <ul class="header-list">
                        <li><i class="fa-solid fa-location-pin"></i>Chennai, India </li>
                        <li><i class="fa-solid fa-envelope"></i><a href="mailto:mazeen99@outlook.com">mazeen99@outlook.com</a></li>
                    </ul>
                </div>
            </div>
            <h1 class="t-center">Seyed Mohamed Mazeen</h1>
            <h3 class="t-center">Front end developer</h3>
        </header>
    )
}

export default Header;