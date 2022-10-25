/*
*
* education.js
* @author - Mazeen
* @date - 25 October, 2022
**/
import Title from '../title/title';
import './style.css';

const Education = () => {
    return (
        <div class="card">
            <Title heading="Educations"></Title>
            <div class="row">
                    <div class="cell-70w">
                        <ul class="educations-list">
                            <li><i class="fa-solid fa-school"></i></li>
                        </ul>
                    </div>
                    <div class="cell-1">
                        <ul class="educations-list">
                            <li>
                                <h4>Our Own English High School, Fujairah</h4>
                                <p>High School (CBSE)</p>
                                <p>2014 - 2017</p><label>United Arab Emirates</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="cell-70w">
                        <ul class="educations-list">
                            <li><i class="fa-solid fa-building-columns"></i></li>
                        </ul>
                    </div>
                    <div class="cell-1">
                        <ul class="educations-list">
                            <li>
                                <h4>The New College Royapettah, Chennai</h4>
                                <p>Bachelor of Commerce (General)</p>
                                <p>2017 - 2020</p><label>Chennai</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="cell-70w">
                        <ul class="educations-list">
                            <li><i class="fa-solid fa-graduation-cap"></i></li>
                        </ul>
                    </div>
                    <div class="cell-1">
                        <ul class="educations-list">
                            <li>
                                <h4>MEASI Institute Of Management, Chennai</h4>
                                <p>Master of Business Administration (Marketing & Logistics)</p>
                                <p>2020 - 2022</p><label>Chennai</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="cell-70w">
                        <ul class="educations-list">
                            <li><i class="fa-solid fa-certificate"></i></li>
                        </ul>
                    </div>
                    <div class="cell-1">
                        <ul class="educations-list">
                            <li>
                                <h4>FITA Academy</h4>
                                <p>2022</p><label>Chennai</label>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Education;