import React from "react";

class ReaviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { author, review  } = this.props;
 
    return (
      <div>
        <h2>{author.name} rated it {review.rating}</h2>
        <div>{review.body}</div>
      </div>
    );
  }
}

export default ReaviewIndexItem;
