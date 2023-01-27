// import { Rick } from "../../data";
import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";

import { addFavorite, deleteFavorite } from "../../redux/actions/actions.js"

import { connect } from "react-redux";

import { useState, useEffect } from "react";


export function Card(props) {

   const [isFav, setIsFav] = useState(false); // estado local en el componente
   // const [isFav, setIsFav] = [false, f()]
   // isfav = false, setisfav = f(){}

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      } else {
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.myFavorites?.forEach((fav) => { // que sea mayor que cero asi no rompe
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={styles.card}>{
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button onClick={() => props.onClose(props.id)}>X Close</button><br />
         <Link className={styles.Link} to={`/detail/${props.id}`} ><h2>{props.name.slice(0, 15)}...</h2></Link>
         {/* <h2>{props.species}</h2>
         <h2>{props.gender}</h2> */}
         <img className={styles.card} src={props.image} alt="img not found" />
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return{
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },

      deleteFavorite: function(id){ // para eliminarlos todos, se saca el id
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
