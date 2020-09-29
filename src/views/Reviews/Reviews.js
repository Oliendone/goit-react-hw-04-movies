import React, { Component } from 'react';

import moviesAPI from '../../utilities/moviesAPI';

export default class Cast extends Component {
  state = {
    reviews: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    moviesAPI
      .movieReviews(this.props.match.params.movieId)
      .then(reviews => {
        reviews.total_results
          ? this.setState({ reviews: reviews.results })
          : this.setState({ reviews: 'There are no reviews yet' });
      })
      .catch(error => {
        this.setState({ error: error.message });
        console.log(error);
      })
      .finally(() =>
        this.setState({
          loading: false,
        }),
      );
  }
  render() {
    const { reviews } = this.state;
    console.log(reviews);

    return (
      <>
        {reviews && typeof reviews === 'object' && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
        {reviews && typeof reviews === 'string' && <p>{reviews}</p>}
      </>
    );
  }
}
