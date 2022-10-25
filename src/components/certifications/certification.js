/*
*
* certification.js
* @author - Mazeen
* @date - 25 October, 2022
**/
import Title from '../title/title';
import './style.css';

const Certification = () => {
    return (
        <div class="card">
            <Title heading="Certifications"></Title>
            <div class="row">
                <div class="cell-70w">
                    <ul class="certification-list">
                        <li><i class="fa-solid fa-certificate"></i></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="certification-list">
                        <li>
                            <h4>HTML & CSS</h4>
                            <p>FITA Academy, Chennai</p>
                            <p>2022</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="cell-70w">
                    <ul class="certification-list">
                        <li><i class="fa-solid fa-certificate"></i></li>
                    </ul>
                </div>
                <div class="cell-1">
                    <ul class="certification-list">
                        <li>
                            <h4>JavaScript & ReactJs</h4>
                            <p>FITA Academy, Chennai</p>
                            <p>2022</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Certification;