const Grid = ({ children }) => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-5 gap-5">{children}</div>
    </main>
  );
};
export default Grid;
