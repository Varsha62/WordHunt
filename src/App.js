import { useEffect, useState } from 'react';
import './App.css';
// import { purple } from '@mui/material/colors';
import axios from 'axios';
import { Container } from '@mui/system';
// import {Switch,withStyles} from '@mui/material';
import Header from './components/Header/Header';
import Definations from './components/Definations/Definations';



function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category , setCategory]=useState("en");

  // const PurpleSwitch = withStyles({
  //   switchBase: {
  //     color: purple[50],
  //     "&$checked": {
  //       color: purple[900],
  //     },
  //     "&$checked + $track": {
  //       backgroundColor: purple[500],
  //     },
  //   },
  //   checked: {},
  //   track: {},
  // })(Switch);

  const dictionaryApi = async() =>{
    try{
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    }catch(error) {
      console.log(error);
    }
  };
  console.log(meanings);
  useEffect(() =>{
    dictionaryApi();

  },[word,category] );

  
  return (
    <div className="App"
     style={{height:'100vh',
     backgroundColor:'#2B2c34',color:'white'}}
    >
    <Container
     maxWidth = "md"
     style={{display:'flex',
     flexDirection:'column',
     height:'100vh',}}>
   <Header 
   category ={category} 
   setCategory={setCategory}
    word={word} 
    setWord={setWord}
    />
    {meanings && (
      <Definations word ={word} meanings={meanings} category={category}/>
    )}
 
    </Container>
    </div>
  );
}
// import { grey } from '@mui/material/colors';

export default App;
