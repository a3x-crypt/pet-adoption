// Graceful error with error boundary, kinda like 404 page
// https://reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate() {
    //This do redirection
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <div>
          <h1>There was an error with this listing</h1>
          <p>
            <Link to="/">Click here</Link> to go back to the home page
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
