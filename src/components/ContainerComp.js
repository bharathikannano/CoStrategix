import React, { Component } from "react";
import Cardcomponent from "./Cardcomponent";
import { connect } from "react-redux";
import { options } from "sw-toolbox";

class ContainerComp extends Component {
constructor(props) {
  super(props);

}

 componentDidMount() {
   this.props.dispatch({ type: "API_CALL_REQUEST" });
  }
  render() {
    const {cData} = this.props;
    console.log(this.props);
      return(
        <React.Fragment>
        <div className="container">
        <h1>Weather Forecasting</h1>
        <div className="row">
       {cData ? cData.map((value, index) => <Cardcomponent key={index} {...value}/>) : <Cardcomponent/>}
       </div> 
       </div>
       </React.Fragment>
       );
    
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        cData: state.cData,
        error: state.error
    };
};

export default connect(mapStateToProps)(ContainerComp);