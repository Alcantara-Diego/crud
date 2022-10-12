import './App.css'
import {Container} from './components/styled/Container.styled'

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchUserSection from './components/SearchUserSection';
import NewUserSection from './components/NewUserSection';



function App() {
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
