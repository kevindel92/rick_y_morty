import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");
   //esta es otra forma
   // const handleChange = (e) =>{
   //    const { value } = e.target;
   //    setCharacter({
   //       ...character,
   //       value
   //    })
   // }
   const handleChange = (evento) =>{
      const { value } = evento.target;
      console.log(value)
   setCharacter(value);
   } 

   return (
      <div className={styles.div}>
         <input className={styles.input} type='search' placeholder="Buscar" onChange={handleChange} />
      <button className={styles.boton} onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
