import React from "react";

import { getData } from "../actions/action";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react"

const SoccerForm = props => {
	const handleGetData = e => {
		e.preventDefault();
		props.getData();
	}

	return (
		<>
			<form onSubmit={handleGetData}>


				<Button inverted color="red" type=" submit">Watch</Button>

			</form>
		</>
	);
};

const mapStateToProps = state => {
	return {
		isFetchingData: state.isFetchingData
	};
}

export default connect(mapStateToProps, { getData })(SoccerForm);
