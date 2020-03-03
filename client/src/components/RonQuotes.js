import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getQuote } from "../store/actions";

const RonQuotes = ({ getQuote, quote, isFetching, error }) => {
  if (isFetching) {
    return <h2>Fetching a quote now :)</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Ron Swanson Says: {quote}</h1>
      <button onClick={getQuote}>Get new quote</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(RonQuotes);
