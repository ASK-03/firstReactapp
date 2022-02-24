import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return(
    <div className="cardContainer"> 
        <img src={`./${props.item.image}`} />
        <div className="content">

            <div className="country">

            <FontAwesomeIcon className="locationIcon" icon={faLocationDot}/>
            <p>{props.item.country}</p>
            
            </div>

            <h2>{props.item.place}</h2>

            <h5 className="dateVisited">{props.item.date}</h5>

            <p>
                {props.item.description}
            </p>

        </div>

    </div>
    );
}
