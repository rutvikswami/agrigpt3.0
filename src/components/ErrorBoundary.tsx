import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Language switching error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🌾</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Language Loading...
            </h2>
            <p className="text-gray-600 mb-6">
              भाषा बदली जा रही है... / Language is being switched...
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Refresh / रीफ्रेश करें
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}