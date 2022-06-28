import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import CommentArea from './components/CommentArea'
import { Container, Row, Col } from 'react-bootstrap';
import scifiBooks from './data/scifi.json'
import { Component } from 'react';

class App extends Component {
  state = {
    asin: ""
  };

  showComments = (newAsin) => {
    this.setState(
      { asin: newAsin }
    )
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={8}><BookList books={scifiBooks} showComments={this.showComments} /></Col>
            <Col md={4}><CommentArea asin={this.state.asin} /></Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default App;
