import './App.css'
import {Container} from './components/styled/Container.styled'

import Navbar from './components/Navbar';
import CreateUserSection from './components/CreateUserSection';
import UsersList from './components/UsersList';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>

        
        <CreateUserSection/>
        <UsersList/>
        
      </Container>
    </div>
  );
}

export default App;
