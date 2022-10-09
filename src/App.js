import React from 'react';
import './App.css';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Content} from './components/content'
import 'bootstrap/dist/css/bootstrap.min.css'; /* Imported bootstrap to app so nav bar can be used */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';

class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App">

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>  <!-- This NavBar is visible on every page component of my application it contains a link to three other components called Home, Read & create. -->
            <Nav.Link href="/read">Read</Nav.Link> 
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes> <!-- Added routing to the application so that when you click on one of the links on the Navbar it will navigate to either the footer, header or content component -->
      <Route path='/' element={<Content></Content>}></Route>
      <Route path='/read' element={<Header></Header>}></Route>
      <Route path='/create' element={<Footer></Footer>}></Route>
      </Routes>
      {/*</Routes><Header></Header>
      <Content></Content>
      <Footer></Footer>*/}
    </div>
    </Router>
  );
}
}
export default App;
