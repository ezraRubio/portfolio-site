function Projects() {
  return (
    <div className="ml-8">
      <h2 className="mt-28">coming soon</h2>
      <h3> Ezra Rubio </h3>
      <h3> ezra@ezrarubio.com</h3>
      <h3> 0585504711 </h3>
      <div className="flex flex-col space-y-6 mt-6">
        <h1 className="text-bold text-black text-3xl">Pet Agency Project: </h1>
        <a
          href="https://pet-agency.vercel.app/"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-700 text-white text-center font-semibold py-2 px-4 rounded w-1/6"
        >
          Click Here
        </a>
        <p>
          * currently undergoing extensive refactoring, but search functionality
          is available *
        </p>
      </div>
    </div>
  );
}

export default Projects;
