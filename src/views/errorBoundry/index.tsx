// @ts-nocheck
import React from 'react';
import error from '../../assets/error.png';
class ErrorBoundary extends React.Component {
  constructor(props: React.ReactNode) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className=' flex justify-center items-center flex-col grow 	h-screen'>
          <img alt='404 image' src={error} className='w-72 ' />
          <h2 className='text-5xl mt-16 text-center'>something went wrong</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
