// /* vvv allChracters page vvv */
// import React, { useState, useEffect } from 'react';
// import { API_URL } from './constants'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// function AllCharacters() {
//     const [serverData, setServerData] = useState([])

//     useEffect(() => {
//         axios.get(`${API_URL}/allCharacters`)
//         .then(async res => {
//             setServerData(res.data.payload)
//         })
//         .catch((e) => console.log(e))
//     }, [])
//     return (  
//         <ul>
//             {
//                 serverData.length > 0 ?
//                     serverData.map((character) => {
//                         return (
//                         <li key={character._id}>
//                                 <Link to={`/mcu/${character.name}`}>
//                                     {character.name}
//                                 </Link>
//                         </li>
//                         )
//                     })
//                     :
//                     <h1>loading</h1>
//             }
//         </ul>
//     );
// }

// export default AllCharacters;

// /* vvv one character page*/
// import { useParams } from 'react-router-dom'
// import { API_URL } from './constants'
// import React, { useState, useEffect } from 'react';

// function OneCharacter() {
//     const { name } = useParams()

//     const [character, setCharacter] = useState({
//         debutFilm: "",
//         debutYear: ""
//     })

//     useEffect(() => {
//         fetch(`${API_URL}/getCharacterByName/${name}`, {
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "*"
//             }
//         })
//             .then(async res => {
//                 let result = await res.json()
//                 setCharacter(result.payload)
//             })
//     }, [name])

//     return (
//         <>
//             <h1>The character {character.name} first debuted in the film...</h1>
//             <br /><br />
//             <p>Debuted in {character.debutFilm}</p>
//             <p>Released in the year {character.debutYear}</p>
//         </>
//     );
// }

// export default OneCharacter;