import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Fullpage from "./Fullpage"
import CdCase from "./components/CdCase"
import IMissSummer from "./components/IMissSummer"

class Root extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reverse: false
		}
	}

	playForward = () => this.setState({ reverse: false })
	playReverse = () => this.setState({ reverse: true })

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
					    	playReverse={this.playReverse}
					    	playForward={this.playForward}
					    	{...routeProps} 
					    />
					  )}
		      />
		      <Route 
		      	exact path="/ep" 
		      	render={(routeProps) => (
		      		<Fullpage />
		      	)}
		      />
		      <Route 
		      	exact path="/imisssummer" 
		      	render={(routeProps) => (
		      		<IMissSummer />
		      	)}
		      />
					<Route render={() => <Redirect to="/" />} />
		    </Switch>
		  </BrowserRouter>
		)
	}
}

export default Root