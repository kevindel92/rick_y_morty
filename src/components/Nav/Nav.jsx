import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from "../Nav/Nav.module.css"
import { Link } from "react-router-dom";

export default function NavBar(props) { // o {onSearch}
    return(
        <div className={styles.div}>
            <SearchBar onSearch={props.onSearch}/>
            <buttonAbout><Link className={styles.Link} to="/about">About</Link></buttonAbout>
            <buttonHome><Link className={styles.Link} to="/home">Home</Link></buttonHome>
        </div>
    )
}

