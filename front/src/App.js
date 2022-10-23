import './App.css'
import {Container} from './components/styled/Container.styled'

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchUserSection from './components/SearchUserSection';
import NewUserSection from './components/NewUserSection';
import { useEffect } from 'react';




function App() {

  useEffect(()=>{
    let content = document.getElementsByClassName("content")[0];


    let searchUserSection = content.children[0];
    searchUserSection.setAttribute("id", "searchUserSection");
    // Add new class and keep the default one in order to not break the item styled-component
    let searchUserClass = `sectionItem ${searchUserSection.className}`
    searchUserSection.setAttribute("class", searchUserClass);


    let newUserSection = content.children[1];
    newUserSection.setAttribute("id", "newUserSection");
    let newUserClass = `sectionItem ${newUserSection.className}`
    newUserSection.setAttribute("class", newUserClass);

    
  },[]);



  return (
    <div className="App">
      <Navbar/>
      <Container>

        <Sidebar/>
        
        <div className="content">
          <SearchUserSection/>
          <NewUserSection/>
        </div>
        
      </Container>
    </div>
  );
}

export default App;
