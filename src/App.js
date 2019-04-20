import React, { Component } from 'react';
import GraphKpu from './Components/graphKpuMain'
import {Row, Col, Container} from 'reactstrap'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="mt-5">
            <Col className="lg-12"><GraphKpu /></Col>
          </Row>
        </Container>
        
        
      </div>
    );
  }
}

export default App;
