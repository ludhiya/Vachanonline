import React from 'react';
import ControlledCarousel from './components/ControlledCarousel';
import CarouselHeader from './components/CarouselHeader';
import {Row, Col} from 'react-bootstrap';

function App() {
  return (
    <>
      <Row className="header"> 
      <Col><CarouselHeader /></Col>
      </Row>
      
      <Row><Col> <ControlledCarousel /></Col></Row>
      
   </>
  );
}

export default App;
