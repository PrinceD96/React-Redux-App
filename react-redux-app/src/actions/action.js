import axios from "axios";

export const GET_DATA = "GET_DATA";
export const UPDATE_HIGHLIGHTS = "UPDATE_HIGHLIGHTS";
export const SET_ERROR = "SET_ERROR"

export const getData = () => dispatch => {
	dispatch({ type: GET_DATA });
	axios
		.get("https://www.scorebat.com/video-api/v1/")
		.then(res => {
			console.log("API_DATA", res)
			dispatch({ type: UPDATE_HIGHLIGHTS, payload: res.data })
		})
		.catch(error => {
			console.log(error)
			dispatch({ type: SET_ERROR, payload: "We hit a snag while fetching your data. Please come back later." })
		});
};
