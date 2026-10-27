import React from "react";

// A failed optional scene must not remove the candidate's readable content.
export default class VisualBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return this.props.fallback || null;
    return this.props.children;
  }
}
