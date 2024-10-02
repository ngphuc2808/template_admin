import { Component } from "react";
import ErrorPage from "./error";

class ErrorBoundary extends Component<
  ErrorBoundaryChildrenType,
  ErrorBoundaryType
> {
  constructor(props: ErrorBoundaryChildrenType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryType {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
