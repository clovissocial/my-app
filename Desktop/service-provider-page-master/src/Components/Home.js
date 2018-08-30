import React, { Component } from 'react';

<div className="container">
         <div className = "side-bar">
          <Form>
            <p>categories </p>
            <hr />
            <input type ="text" placeholder="search categories"></input>
             <ul className="nav">
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
              <li><a href="#">Category 4</a></li>
            </ul>
          </Form>
         </div> 
          <div className= "container-fluid">
         <Pager>
           <Pager.Item href="#">Previous</Pager.Item>{' '}
           <Pager.Item href="#">Next</Pager.Item>
         </Pager>
        
          </div>
        </div>