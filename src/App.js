import React, { Component } from 'react';
import GraphKpu from './Components/graphKpuMain'
import {Row, Col, Container, Card, CardHeader, CardBody, CardFooter,
        CardText

        } from 'reactstrap'
import KpuLogo from './Gambars/kpu12.png'
import { Image, ImageGroup } from 'semantic-ui-react'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="mt-2">
            <Col className="md-12">
              <Card>
                <CardHeader>
                    <Image className="KpuLogo md-2" src={KpuLogo}/>
                  <h5 className="md-10">Komisi Pemulihan Nasional</h5>
                </CardHeader>
                <CardBody><GraphKpu /></CardBody>
                <CardFooter><CardText className="right">Powerd By. Ali Kurniawan</CardText></CardFooter>

              </Card>
            </Col>
          </Row>
        </Container>
        
        
      </div>
    );
  }
}

export default App;
