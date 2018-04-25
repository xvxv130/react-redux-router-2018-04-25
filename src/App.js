import React from 'react';
import {connect} from 'react-redux'
import {Addgun,Removegun,addgunasync} from './index.redux'
// import {Button} from 'antd-mobile'
@connect(state=>({num:state}),
    {Addgun,Removegun,addgunasync})

class App extends React.Component{
    render(){
        return (
            <div>
                <h2>现在有机枪{this.props.num}</h2>
                <button onClick={this.props.Addgun}>申请机枪</button>
                <button onClick={this.props.Removegun}>上交机枪</button>
                <button onClick={this.props.addgunasync}>拖两天申请机枪</button>
            </div>

        )
    }
}

export default App;