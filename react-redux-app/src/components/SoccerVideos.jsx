import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/action";
import { Card, Icon } from 'semantic-ui-react'

const SoccerVideos = props => {
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Card.Group itemsPerRow={6} className="cards__container">
        {props.erros ? (<div >{props.error}</div>) : (
          props.highlights.map((highlight, index) => {
            return (
              <Card fluid key={index} className="card"
                image={highlight.thumbnail}
                header={highlight.title}
                description={highlight.competition.name}
                extra={highlight.date}
              />
            )
          })
        )}
      </Card.Group>
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