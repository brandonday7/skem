import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Fullpage from "./Fullpage"
import CdCase from "./components/CdCase"

class Root extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reverse: false
		}
	}

	setReverse = () => this.setState({ reverse: !this.state.reverse })

	render() {
		const { reverse } = this.state
		return (
		  <BrowserRouter>
		    <Switch>
		      <Route 
		      	exact path="/" 
					  render={(routeProps) => (
					    <CdCase 
					    	reverse={reverse} 
					    	setReverse={this.setReverse}
					    	{...routeProps} 
					    />
					  )}
		      />
		      <Route path="/ep" exact component={Fullpage} />
		    </Switch>
		  </BrowserRouter>
		)
	}
}

export default Root