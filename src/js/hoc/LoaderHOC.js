import React, { Component } from "react";
import { isEmpty } from "../lib";
import Loader from "../components/common/Loader";

const LoaderHOC = propName => WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      return isEmpty(this.props[propName]) ? (
        <Loader />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default LoaderHOC;
