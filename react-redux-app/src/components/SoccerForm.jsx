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


				<button type="submit">Watch</button>

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
