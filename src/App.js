function App() {
  return (
    <>
      <header className="mb-4 text-center">
        <h1 className="text-7xl font-bold">
          Tailwind CSS escape characters test
        </h1>
      </header>
      <main className="m-2 w-full">
        <div className="w-full flex flex-col font-mono text-lg">
          <div className="w-1/2 bg-red-400 p-2">
            <p className="text-white">w-1/2</p>
          </div>
          <div className="half-width mb-2 bg-blue-400 p-2">
            <p className="text-white">
              {`.half-width {
                @apply w-1/2
              }`}
            </p>
          </div>
          <div className="w-1/4 bg-red-400 p-2">
            <p className="text-white">w-1/4</p>
          </div>
          <div className="quarter-width bg-blue-400 p-2">
            <p className="text-white">
              {`.quarter-width {
                @apply w-1/4
              }`}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
