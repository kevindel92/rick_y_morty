import { useState, useEffect } from 'react'
import styles from './App.module.css'
// import Card from '../src/components/Card/Card.jsx'
import Cards from '../src/components/Cards/Cards.jsx'
// import SearchBar from '../src/components/SearchBar/SearchBar.jsx'
import NavBar from './components/Nav/Nav.jsx';
// import characters, {Rick} from './data.js'
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Error from './components/Error/Error.jsx';
import Form from "./components/Form/Form.jsx"
import { useLocation } from 'react-router-dom';

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  // el estado
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const username = "kevin@hotmail.com";
  const password = "a12345";

  function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
  }

//   const example = {
//     name: 'Morty Smith',
//     species: 'Human',
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };

 const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });

 }

 const onClose = (id) => {
setCharacters(characters.filter(char => char.id !== id))
 }

 useEffect(() => {
      !access && navigate('/');
    }, [access]);

  return (
    <div className={styles.App}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters}
          onClose={onClose}
        />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>





    // <div className='App' style={{ padding: '25px' }}>
      /* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr /> */
      /* <div>
        <NavBar onSearch={onSearch}/>
      </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div> */
  )
}

export default App
