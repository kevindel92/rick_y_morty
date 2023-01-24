import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css"

export default function Detail(){

    const [character, setCharacter] = useState({});

    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);


    return(
        <div className={styles.card}>
            <Link className={styles.Link} to="/home"><buttonToHome>To Home</buttonToHome></Link>
            <label></label><h1>Name: {character.name}</h1><label/>
            <h2>Id: {character.id}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Specie: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Origin: {character.origin?.name}</h2>
            <h2>Location: {character.location?.name}</h2>
            <img src={character.image} alt="not found"/>
        </div>
    )
}
