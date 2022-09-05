import './App.css'
import {Container} from './components/styled/Container.styled'

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreateUserSection from './components/CreateUserSection';
import UsersList from './components/UsersList';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>

        <Sidebar/>
        
        <div className="content">
          <CreateUserSection/>
          <UsersList/>
        </div>
        
      </Container>
    </div>
  );
}

export default App;
