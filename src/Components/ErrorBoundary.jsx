/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("errrorrr**", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error Boundary Error, ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="pt-20 w-full h-full flex flex-col items-center justify-center">
            <img
              src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
              alt="Something went wrong"
            />
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
