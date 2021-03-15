import React, { Component } from 'react';
import '../App.css';
import fire from '../fire.js';

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  componentDidMount() {

  }

  render() {
    

    return (
      <section>

        <div className="menuMain">
          <p onClick={()=>{this.props.thoughtProcessChange("pieces")} }>Pieces</p>
          <p>Scraping</p>
          <p>Learning</p>
          <p>Time</p>
        </div>

      </section>
    );
  }
}

export default MainMenu;
