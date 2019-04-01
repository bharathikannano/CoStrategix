import React, { Component } from "react";

export default class Cardcomponent extends Component {

constructor(props) {
  super(props);
  this.state ={
      redirect:false
  }

}

 navBack(props) {
    this.setState({redirect: true});
  }
  render() {
    const {city, Humidity, weather, Precipitation, description} = this.props;

      return(
        <div className="col-md-4">
        <div className="col-md-12 border cumsover">
        <img className="card-img-top" src="https://picsum.photos/300/300/?image=41" alt="Card image cap" />
          <ul className="list-group list-group-flush">
           <li className="list-group-item">City <span className="float-md-right">{city}</span></li>
           <li className="list-group-item">Humidity<span className="float-md-right">{Humidity}</span></li>
           <li className="list-group-item">Weather<span className="float-md-right">{weather}</span></li>
           <li className="list-group-item">Precipitation<span className="float-md-right">{Precipitation}</span></li>
           <li className="list-group-item">Description<span className="float-md-right"><span className="fi-signal"></span>{description}</span></li>

        </ul>
        <div className = "btn-group btn-block">
         <button type = "button" className = "btn btn-danger btn-block" onClick={() => this.navBack()}>Show Less</button>
        </div>
        </div>
        </div>
      );
  }
}