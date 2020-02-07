import React, { useEffect } from "react";
import { connect } from "react-redux";

const SoccerVideos = () => {
  useEffect(() => {

  }, [])

  return (
    <>
      <h3>Soccer Videos</h3>
    </>
  )

}

const mapStateToProps = state => {
  return {
    highlights: state.highlights
  }
}

export default SoccerVideos;