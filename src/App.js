import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import CommentArea from './components/CommentArea'
import { Container, Row, Col } from 'react-bootstrap';
import scifiBooks from './data/scifi.json'
import { Component } from 'react';

class App extends Component {
  state = {
    selected: undefined,
  };

  showComments = (newValue) => {
    this.setState(
      { selected: newValue }
    )
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={6}><BookList books={scifiBooks} /></Col>
            <Col md={6}><CommentArea selected={this.state.selected} /></Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default App;
