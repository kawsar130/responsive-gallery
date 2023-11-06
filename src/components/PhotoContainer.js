const PhotoContainer = ({ children }) => {
  return (
    <main className="flex flex-col gap-5 items-center justify-center sm:h-screen w-full sm:w-7/12 mx-auto p-10">
      {/* Header */}
      <div className="w-full text-2xl font-bold">
        <h3>Gallery</h3>
      </div>

      {/* Photo Container */}
      <div className="grid md:grid-cols-5 gap-5 w-full">{children}</div>
    </main>
  );
};
export default PhotoContainer;
