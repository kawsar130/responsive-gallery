const ErrorUI = ({ reset }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="btn-secondary"
      >
        Try Again
      </button>
    </div>
  );
};
export default ErrorUI;
