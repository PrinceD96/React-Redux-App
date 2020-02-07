import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/action";

const SoccerVideos = props => {
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {props.erros ? (<div >{props.error}</div>) : (
        props.highlights.map(highlight => <div>{highlight}</div>)
      )}
    </>
  )

}

const mapStateToProps = state => {
  return {
    highlights: state.highlights,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(SoccerVideos)