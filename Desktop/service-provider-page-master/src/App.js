import React, { Component } from 'react';
import {Jumbotron, Col, Grid, Row, Pager, 
  Form, Thumbnail, FormGroup, InputGroup,
   Button, FormControl} from 'react-bootstrap'; 
import './Components/Home.css'; 
import Partners from './Components/Partner';
import Pagination from './Components/Pagination';
class App extends Component {

    constructor(props){
        super(props);

        this.state ={
            agents: [
                {
                    pic: require('./Components/pic-3.jpg'),
                    title: "An Agent",
                    "describe": "Description",
                    "text": "providing you with the best service you could possibly get out there",
                    "pic2": "require('./Components/earth-2.png')",
                    "text2": "Website"
                }
            ]
        }
    }

  render() {
      console.log(this.state.agents)
    return (

<div>
    {/*hero-image-section*/}


    <Jumbotron className = "hero">
        <div className = "hero-text">
            our service provider page.
        </div>
    </Jumbotron>


         
    {/*card setion*/} 


<Grid className="section-2">
    <Row>
    
        <Col xs={12} md={8} className= "main-page">
            <Row>
                
                {this.state.agents.map((agent, i) => {
                    <div>Hello</div>
                    // <Col sm={4}>
                    
                    {/* <Thumbnail className="card" src={agent.pic  }>
                        <h3>{agent.title}</h3>
                        <p>{agent.describe}</p>
                        <p>
                        {agent.text}
                        </p>
                        <p>
                            {agent.pic2}
                            {agent.text2}
                        </p>
                    </Thumbnail> */}
                {/* </Col> */}
                })
                }
                {/* <Col sm={4}>
                    <Thumbnail className="card" src={require('./Components/pic-3.jpg')}>
                        <h3>An Agent</h3>
                        <p>Description</p>
                        <p>
                            providing you with the best service you could possibly get out there
                        </p>
                        <p>
                            <img src={require('./Components/earth-2.png')} alt="earth" height="15px"width="15px" className="earth-glyphicon"/>
                            <div className="earth">Website</div>
                        </p>
                    </Thumbnail>
                </Col>

                <Col sm={4}>
                    <Thumbnail className="card" src={require('./Components/pic-3.jpg')}>
                        <h3>An Agent</h3>
                        <p>Description</p>
                         <p>
                            providing you with the best service you could possibly get out there
                        </p>
                        <p>
                        <img src={require('./Components/earth-2.png')} alt="earth" height="15px"width="15px" className="earth-glyphicon"/>
                          <div className="earth">Website</div>
                        </p>
                    </Thumbnail>
                </Col>

                <Col sm={4}>
                    <Thumbnail className="card" src={require('./Components/pic-3.jpg')}>
                        <h3>An Agent</h3>
                        <p>Description</p>
                        <p>
                            providing you with the best service you could possibly get out there
                        </p>
                        <p>
                        <img src={require('./Components/earth-2.png')} alt="earth" height="15px"width="15px" className="earth-glyphicon"/>
                           <div className="earth">Website</div>
                        </p>
                    </Thumbnail>
                </Col>

                <Col sm={4}>
                    <Thumbnail className="card" src={require('./Components/pic-3.jpg')}>
                        <h3>An Agent</h3>
                        <p>Description</p>
                        <p>
                            providing you with the best service you could possibly get out there
                        </p>
                        <p>
                        <img src={require('./Components/earth-2.png')} alt="earth" height="15px"width="15px" className="earth-glyphicon"/>
                          <div className="earth">Website</div>
                        </p>
                    </Thumbnail>
                </Col>

                <Col sm={4}>
                    <Thumbnail className="card" src={require('./Components/pic-3.jpg')}>
                        <h3>An Agent</h3>
                        <p>Description</p>
                        <p>
                            providing you with the best service you could possibly get out there
                        </p>
                        <p>
                        <img src={require('./Components/earth-2.png')} alt="earth" height="15px"width="15px" className="earth-glyphicon"/>
                          <div className="earth">Website</div>
                        </p>
                    </Thumbnail>
                </Col>

                <Col sm={4}>
                    <Thumbnail className="card" src={require('./Components/pic-3.jpg')}>
                        <h3>An Agent</h3>
                        <p>Description</p>
                        <p>
                            providing you with the best service you could possibly get out there
                        </p>
                        <p>
                        <img src={require('./Components/earth-2.png')} alt="earth" height="15px"width="15px" className="earth-glyphicon"/>
                          <div className="earth">Website</div>

                        </p>
                    </Thumbnail>
                </Col> */}
                 

            {/*Component from Pagination.js*/}
            <Pagination/>

            </Row>
        </Col>
            

        {/*side-bar-section*/}

        <Col sm={3} xs={12} className="side-bar">
            <Form>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Button>
                            <FormControl type="text" placeholder="Search Categories" /> 
                                <Button>Search</Button>
                        
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
          
        <Thumbnail className="side">
            <p className="categories"> Our Categories</p>
            <hr />
             
            <ul className="nav">
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a></li>
                <li><a href="#">Category 3</a></li>
                <li><a href="#">Category 4</a></li>
            </ul>
        </Thumbnail>
          
        </Col>
    

    </Row>
</Grid>

<div className="agent">
    <Grid>
        <Row>
            <Col>
                <p className="agent-text">
                  Getting Started As An Agent
                </p>

                <p className="text-1">
                  Afrika Express offer you the best platform out there to get started as an agent and to invest in your business with the best of your interest and we offer you the best platform you could possibly get out there
                </p>

                <p className="text-2">
                  Afrika Express offer you the best platform out there to get started as an agent
                </p>

                <Button bsstyle="primary" className="button">Getting Started</Button>
            </Col>  
        </Row>
    </Grid>
</div>
            
    

    <Partners />


  <div className="text">
            <p>
              What is Lorem Ipsum?</p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              <p> containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                Why do we use it?
              <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
              that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
              <p> content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
              <p> evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </p>
        </div>
</div>   
  
      
            

          
      
    );
  }
}

export default App;
