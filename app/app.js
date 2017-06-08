import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {Route, Router, IndexRoute, hashHistory, Link} from 'react-router'
import Main from '././components/Main'
import  '././styles/app.scss' 

'use strict'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main} >
			{/*IndexRoute is for default route, when nothing is selected* goes here <IndexRoute /> */}
		</Route>		
	</Router>,
	document.getElementById('root')
)