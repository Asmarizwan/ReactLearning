import './App.css';
// import LightDarkNavbar from './components/LightDarkToggleProject/LightDarkNavbar';
// import LightDarkHeader from './components/LightDarkToggleProject/LightDarkHeader';
// import LightDarkMain from './components/LightDarkToggleProject/LightDarkMain';
// import { useState } from 'react';
// import Editor from './components/MarkdownNotesApp/Editor';
// import Sidebar from './components/MarkdownNotesApp/Sidebar';
// import MainApp from './components/MarkdownNotesApp/MainApp';
import MainApp from './components/TenziesGameApp/MainApp';
function App() {
  // const[darkMode,setDarkMode]= useState(true)

  // const toggle=()=>{
  //   setDarkMode(prevMode => !prevMode)
  // }
  return (
    <div className="App">
      {/* light dark mode application */}
      {/* <LightDarkHeader darkMode={darkMode}
       toggle= {toggle}/>
     {/* <LightDarkNavbar  darkMode={darkMode} toggle= {toggle}/> */}              
     {/* <LightDarkMain darkMode={darkMode}/>     */}
     {/* Main app for notes application */}
     <MainApp/>


     {/* <MainApp/> */}
    </div>
  );
}

export default App;
