import React from "react";

const SoccerForm = () => {
	return (
		<>
			<form>
				<fieldset>
					<legend>Pick a league</legend>
					<select>
						<option value='premier'>Premier League</option>
						<option value='laLiga'>La Liga</option>
						<option value='bundesliga'>Bundesliga</option>
						<option value='serieA'>Serie A</option>
						<option value='ligue1'>Ligue 1</option>
						<option value='all'>All Competitions</option>
					</select>
				</fieldset>
			</form>
		</>
	);
};

export default SoccerForm;
