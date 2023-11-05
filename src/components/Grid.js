const Grid = ({ children, columns }) => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div
        className="grid grid-cols-5 gap-2.5"
        style={{
          maxWidth: '1250px',
          border: '1px solid black'
        }}
      >
        {children}
      </div>
    </main>
  );
};
export default Grid;
