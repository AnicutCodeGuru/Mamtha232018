import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementCounter} from "../actions/incrementAction";

class Increment extends Component {
    constructor(){
        super();
        console.log(this.props);
    }
    componentDidMount(){
        debugger;
        console.log( this.props.dataFromStore);
    }
    incCounter(){
        var count=this.props.dataFromStore.count+1;    
        this.props.incrementCounter({count});
    }
 render() {
        return (<input type="button" value={"Increment " + this.props.dataFromStore.count}  onClick={()=>{this.incCounter()}}  /> );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({incrementCounter: incrementCounter}, dispatch);
}

function mapStatetoProps(store){
     return {
        dataFromStore:store.countReducer
    }
}

export default connect(mapStatetoProps,matchDispatchToProps)(Increment);
