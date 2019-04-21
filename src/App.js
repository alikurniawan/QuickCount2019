import React, { Component } from 'react';
import GraphKpu from './Components/graphKpuMain'
import {Row, Col, Container, Card, CardHeader, CardBody, CardFooter,
        CardText,

        } from 'reactstrap'
import KpuLogo from './Gambars/kpu12.png'
import { Image, ImageGroup } from 'semantic-ui-react'

import './App.css';
import LogoAsliKpu from './Gambars/kpuasli.png'
import TableRatting from './Components/tableRatting'

class App extends Component {
  render() {
    return (
      <div>
        <CardHeader className="bg-warning">
        <div className="row">
          <Container>
            <div className="flexChiw">
              <div className="">
                <img className="MainLogoKpu" src={LogoAsliKpu} />
                <span className="text-dark font-weight-bold ml-3 font-100">Real Pemulihan Umum</span>
              </div>
              <div></div>
              <div className="">
                <a href="https://quick-count-2019.herokuapp.com" className="btn btn-sm btn-outline-light text-dark btn-right">Reset Filter</a>
              </div>
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
                <CardBody>
                  <GraphKpu />
                </CardBody>
                <CardHeader>
                <div className="row">
                    <div className="col"><TableRatting /></div>
                    <div className="col"><TableRatting /></div>
                  </div>
                </CardHeader>
                <CardFooter><CardText className="text-center">Ali Kurniawan Real Count</CardText></CardFooter>
              </Card>
            </Col>
            <Row className="">
            <Col className="md-12">
              <bgAnima />
            </Col>
            </Row>     
          </Row>
        </Container>
        <CardFooter className="bg-dark text-light text-center text-weight-bold">
          <div className="row"> 
            <div className="col"></div>
            <div className="col">
              <h3 className="text-light">Kontak</h3>
              <hr style={{color: 'light', border: '2px'}}/>
            </div>
            <div className="col"></div>
          </div>
          
          
        </CardFooter>
        
        
      </div>
    );
  }
}

export default App;
