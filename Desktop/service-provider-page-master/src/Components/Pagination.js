import React, { Component } from "react";
import Pagination from "react-js-pagination";
import './Home.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1, 
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {
      return (
          <div>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={6}
                totalItemsCount={12}
                pageRangeDisplayed={2}
                onChange={this.handlePageChange}
              />
          </div>
    );
  }
}
 
export default App;