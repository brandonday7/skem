import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Fullpage from "./Fullpage"
import CdCase from "./components/CdCase"
import IMissSummer from "./components/IMissSummer"
import Store from "./components/Store"

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
		      		<IMissSummer {...routeProps}/>
		      	)}
		      />
					<Route exact path="/store" render={(routeProps) => <Store />}/>
					<Route exact path="/epk" 
						component={() => {
							window.open("https://drive.google.com/open?id=1IUIly_Sbe4fxDtq1TTIeHVHvRgdnrw_O", "_blank");
							window.location.href = "https://www.roseredyouth.com";
							return null;
						}} />					
					<Route render={() => <Redirect to="/" />} />
		    </Switch>
		  </BrowserRouter>
		)
	}
}

export default Root
