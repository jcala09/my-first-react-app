import logo from './logo.svg';
import './App.css';
import { useState} from 'react' //one particular function from 'react' lib

// functions from a diff file 
import Title from './components/Title' 
import Modal from './components/Modal'
import React from 'react'

function App() {
  // constants 
  const name="Jerome"
  const [showModem, setShowModem]= useState(true)
  const [showSocials, setShowSocials]= useState(false)
  //socials to show 
  const [Socials,setSocials]= useState([
    <a href= "https://twitch.tv/voldethot">Twitch</a>,
    <a href= "https://instagram.com/jerome_cala">Instagram</a>,
    <a href= "https://twitter.com/jcala9">twitter</a>,

  ])
  
  console.log(showSocials)

  const handleClose = () => {
    setShowModem(false)
  }
  return (
    <div className="App">
    
      <header className="App-Header">
        <img src="OXIWAFFLES.jpg" classname="App-Logo" alt= "logo"/>
      </header>

      <Title abc= "Welcome to Jerome's website"/> 
      <a
        classname="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel= "noopener noreferrer"
        >
        
      </a>
      {showSocials && (<div>
        <button onClick={() => setShowSocials(false)}>Hide my socials</button>
      </div>)}
      {!showSocials &&(<div>
        <button onClick={() => setShowSocials(true)}>What are my socials?</button>
      </div>)}
      {showSocials && Socials.map((event) =>(
      <React.Fragment key={event.id}>
        <h2>
  
       <tr>{event}</tr>
        </h2>
      </React.Fragment>
    ))}
      <Modal>
        <h2>First of all about me:</h2>
        <p>My name is Jerome and I am a junior here at Texas Tech</p>
      </Modal>
    </div>
  );
}

export default App;
