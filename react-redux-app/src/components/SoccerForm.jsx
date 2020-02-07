import React from "react";

import { getData } from "../actions/action";
import { connect } from "react-redux";

const SoccerForm = props => {
	const handleGetData = e => {
		e.preventDefault();
		props.getData();
	}

	return (
		<>
			<form onSubmit={handleGetData}>
				<fieldset>
					<legend>Watch your favorite team</legend>
					<input type="text" id="team" placeholder="Your team name" />
					<button type="submit">Watch</button>
				</fieldset>
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
