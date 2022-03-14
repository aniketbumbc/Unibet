import './ErrorBoundary.css';

const ErrorBoundary = ({ error }) => {
  return (
    <>
      <div className='error'>
        <h3>{error} Please try again!!</h3>
      </div>
    </>
  );
};

export default ErrorBoundary;
