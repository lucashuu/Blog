import React, {
	Component
} from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import store from './store/index'
import Write from './pages/write'
import Login from './pages/login'
import {
	Provider
} from 'react-redux';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';
import {
	GlobalStyle
}
from './style.js';
import {
	GlobalIcon
} from './statics/iconfont/iconfont';

class App extends Component {

	render() {
		return (
			<Provider store={store}>
        		<BrowserRouter>
        			<div>
        				<Header />
        				<Route path='/' exact component={Home}></Route>
        				<Route path='/login' exact component={Login}></Route>
        				<Route path='/write' exact component={Write}></Route>
        				<Route path='/detail/:id' exact component={Detail}></Route>
        			</div>
        		</BrowserRouter>
        		<GlobalStyle />
				<GlobalIcon /> 
			</Provider>
		);
	}
}

export default App;