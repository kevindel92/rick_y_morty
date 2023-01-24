// import { Rick } from "../../data";
import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={styles.card}>
         <button onClick={() => props.onClose(props.id)}>X Close</button><br />
         <Link className={styles.Link} to={`/detail/${props.id}`} ><h2>{props.name.slice(0, 15)}...</h2></Link>
         {/* <h2>{props.species}</h2>
         <h2>{props.gender}</h2> */}
         <img className={styles.card} src={props.image} alt="img not found" />
      </div>
   );
}
