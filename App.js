import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from "./Results";
import requests from "./requests";
import Login from './Login';
import { useDataLayerValue, useStateValue } from './DataLayer';
import { auth } from "./firebase";
import { onAuthStateChanged } from 'firebase/auth';
import Footer from './Footer';


function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  const [{user}, dispatch] = useDataLayerValue();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className="app">
      {!user ? (<Login />) : (
        <>
        {/* <h1>Welcome to the PLAYBOI BABY Mansion</h1> */}
        <Header />
        <Nav setSelectedOption={setSelectedOption} /> 
        <Results selectedOption={selectedOption} />
        <Footer />
        </>
      )}
      
      
    </div>
  );
}

export default App;
