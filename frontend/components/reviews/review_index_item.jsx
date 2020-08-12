import React from "react";

class ReaviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { author, review  } = this.props;
 
    return (
      <div className="review-item">
        <div className="image-rated">
          <img src={window.user} width="52" height="68" />
          <h2>
            <span>{author.name}</span> rated it {review.rating}
          </h2>
        </div>
        <div className="item-body">{review.body}</div>
      </div>
    );
  }
}

export default ReaviewIndexItem;
