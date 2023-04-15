import { useState } from 'react'


import NavBar from './components/NavBar/NavBar';
import HeroSlider from './components/Hero/HeroSlider';


function App() {

  const URL = "https://console.firebase.google.com/project/prueba-context-ecommerce/database/prueba-context-ecommerce-default-rtdb/data/~2F"

  
fetch(URL)
.then((response) => response.json())
.then((json) => console.log(json));

  return (
    <>
        <NavBar />
        <HeroSlider className="top-4"/>
      
       
        <h1>App Nuria</h1>
    </>
  );
}


export default App;