import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from "../Nav/Nav.module.css"
import { Link } from "react-router-dom";

export default function NavBar(props) { // o {onSearch}
    return(
        <div className={styles.div}>
            
            <buttonAbout><Link className={styles.Link} to="/about">About</Link></buttonAbout>
            <buttonHome><Link className={styles.Link} to="/home">Home</Link></buttonHome>
            <buttonFav><Link className={styles.Link} to='/favorites'>Favorites</Link></buttonFav>
            <buttonLogOut><Link className={styles.Link} to='Logout' onClick="/">Logout</Link></buttonLogOut>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

