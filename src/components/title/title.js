/*
*
* title.js
* @author - Mazeen
* @date - 25 October, 2022
**/
import './style.css';

const Title = (props) => {
    var title = props.heading;
    return (
        <h4>{title}</h4>  
    )
}

export default Title;