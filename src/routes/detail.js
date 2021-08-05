import React from "react";
import "./detail.css"

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
      <div className="container">
          <img src={location.state.poster}></img>
        <div className="detail">
          <h1>{location.state.title}</h1>
          <h3>{location.state.year}</h3>
          <p>{location.state.summary}</p>
          <span>
            <ul className="list">
              <li>{location.state.genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            )
              )}</li>
            </ul>
          </span>
        </div>
      </div>
      )
    } else {
      return null;
    }
  }
}
export default Detail;