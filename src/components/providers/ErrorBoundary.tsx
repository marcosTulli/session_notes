import React, { Component, ReactNode } from 'react';
import { ErrorBoundaryLayout } from '../common/ErrorBoundaryLayout';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryLayout error={this.state.error} />;
    }
    return this.props.children;
  }
}
