import React, { Component } from 'react';
import GraphKpu from './Components/graphKpuMain'
import {Row, Col, Container, Card, CardHeader, CardBody, CardFooter,
        CardText

        } from 'reactstrap'
import KpuLogo from './Gambars/kpu12.png'
import { Image, ImageGroup } from 'semantic-ui-react'

import './App.css';
import LogoAsliKpu from './Gambars/kpuasli.png'

class App extends Component {
  render() {
    return (
      <div>
        <CardHeader className="bg-warning">
        <div className="row">
          <Container>
            <div className="col">
            <img className="MainLogoKpu" src={LogoAsliKpu} />
            <span className="text-dark font-weight-bold ml-3">Komisi Pemulihan Umum</span>
            </div>
            
          </Container>
          
        </div>
        </CardHeader>
        <Container>
          <Row className="mt-2">
            <Col className="md-12">
              <Card>
                <CardHeader className="bg-secondary">
                    
                  <h5 className="text-center text-light">HASIL HITUNG SUARA PEMILU PRESIDEN & WAKIL PRESIDEN RI 2019</h5>
                </CardHeader>
                <CardBody><GraphKpu /></CardBody>
                <CardFooter><CardText className="right">Powerd By. Ali Kurniawan</CardText></CardFooter>

              </Card>
            </Col>
            <Row className="">
            <Col className="md-12">
              <bgAnima />
            </Col>
            </Row>
            
          </Row>
        </Container>
        
        
      </div>
    );
  }
}

export default App;
