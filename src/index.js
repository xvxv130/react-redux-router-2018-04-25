import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import  App from './App';
import { counter} from './index.redux'
import {BrowserRouter,Link,Route} from 'react-router-dom'
// import { counter,Addgun,Removegun,addgunasync} from './index.redux'
import {Provider,connect} from 'react-redux'


const store=createStore(counter,compose(applyMiddleware(thunk)
            ,window.devToolsExtension ? window.devToolsExtension():f=>f))

function Erying(){
    return <h2>二营报道</h2>
}
function Qibinglian(){
    return <h2>骑兵连报道</h2>
}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>一营</Link>
                </li>
                <li>
                    <Link to='/erying'>二营</Link>
                </li>
                <li>
                    <Link to='/qibinglian'>骑兵连</Link>
                </li>
                <Route path='/'  exact  component={App}></Route>
                <Route path='/erying' component={Erying}></Route>
                <Route path='/qibinglian' component={Qibinglian}></Route>
            </ul>

            {/* <App /> */}
        </BrowserRouter>
       
    </Provider>
    ),
     document.getElementById('root'));


