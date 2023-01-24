import React from "react";
import validation from "./validation.js";
import styles from "./Form.module.css";

export default function Form(props){

    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = React.useState({
        username: '', 
        password: '' 
    })

    const handleInputChange = (evento) =>{
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value
        })
        setErrors(
            validation({
                ...userData,
                [evento.target.name]: evento.target.value
            })
        )
    }

    const handleSubmit = (evento) => {
        evento.preventDefault(); // para que la pagina no se actualice
        props.login(userData)
    }

return(
<div className={styles.div}>
    <form onSubmit={handleSubmit}>
        <label>Username: </label><br />
        <input 
        type="text" 
        name="username" 
        value={userData.username} 
        onChange={handleInputChange} 
        className={errors.username && styles.warning}/>
        <p className='danger'>{errors.username}</p>
        <label>Password: </label><br />
        <input 
        type="password"
        name="password" 
        value={userData.password} 
        onChange={handleInputChange} 
        className={errors.password && styles.warning}/>
        <p className='danger'>{errors.password}</p>
        <button type="submit">Login</button>
    </form>
</div>
)
}