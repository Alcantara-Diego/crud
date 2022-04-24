import './App.css'
import {Container} from './components/styled/Container.styled'

import Navbar from './components/Navbar';
import CreateUserSection from './components/CreateUserSection';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>

        
        <CreateUserSection/>
        
      </Container>
    </div>
  );
}

export default App;
