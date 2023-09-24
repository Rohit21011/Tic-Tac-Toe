
import { useState } from "react";
import Icon from "./components/Icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const array = new Array(9).fill("empty");
const  App = () => {
  const [cross, setCross] = useState(false);
  const [winMassage, setWinMassage] = useState("");
  
  const checkWinner = () => {
   if(array[0]===array[1] && array[0]===array[2] && array[0]!== "empty"){
    setWinMassage(`${array[0]} wins`)
   }
   else if(array[3]===array[4] && array[3]===array[5] && array[3]!== "empty"){
    setWinMassage(`${array[3]} wins`)
   }
   else if(array[6]===array[7] && array[6]===array[8] && array[6]!== "empty"){
    setWinMassage(`${array[6]} wins`)
   }
   else if(array[0]===array[3] && array[0]===array[6] && array[0]!== "empty"){
    setWinMassage(`${array[0]} wins`)
   }
   else if(array[1]===array[4] && array[1]===array[7] && array[1]!== "empty"){
    setWinMassage(`${array[1]} wins`)
   }
   else if(array[2]===array[5] && array[2]===array[8] && array[2]!== "empty"){
    setWinMassage(`${array[2]} wins`)
   }
   else if(array[0]===array[4] && array[0]===array[8] && array[0]!== "empty"){
    setWinMassage(`${array[0]} wins`)
   }
   else if(array[2]===array[4] && array[2]===array[6] && array[2]!== "empty"){
    setWinMassage(`${array[2]} wins`)
   }
  };

  const changeItem = item => {
  console.log(array)
    if(winMassage){
      return toast(winMassage,{type:"success"})
    }
    if(array[item]==="empty"){
      array[item]=cross ? "cross" : "circle";
      setCross(!cross)
      
    }
    else{
      return toast("already filled",{type:"error"})
    }
     checkWinner();
  };

  const reload = () => {
    if(winMassage){
      setCross(false)
      setWinMassage("")
      array.fill("empty",0,9)
    }
  };

  return (
    
    <Container className="p-5">
  
        <Row>
          <Col md={6} className="offset-md-3">
          <div>
                {winMassage ? (
                  <div className="mb-2 mt-2">
                    <h1 className="text-success text-uppercase text-center">  {winMassage}</h1>
                  
                    <Button block color="success" onClick={reload}>reload</Button>
                  </div>
                  
                  
                ) : (
                  <h1 className="text-center text-warning ">{cross ? "Cross" : "Circle"} turns</h1>

                )}
              </div>
            <div className="grid">
              
              {array.map((item, index) => (
                <Card color="warning" onClick={() => changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item} key={index} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        
    </Container>
  );
}

export default App;
