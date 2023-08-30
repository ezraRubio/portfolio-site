function Projects() {
  return (
    <div className="ml-8">
      <h2 className="mt-28">coming soon</h2>
      <h3> Ezra Rubio </h3>
      <h3> ezra@ezrarubio.com</h3>
      <h3> 0585504711 </h3>
      <div className="flex flex-col space-y-8 mt-6">
        <h1 className="text-bold text-black text-3xl">Pet Agency Project: </h1>
        <a
          href="https://pet-agency.vercel.app/"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-700 w-2/5 md:w-1/6 text-white text-center font-semibold py-2 px-4 rounded"
        >
          Click Here
        </a>
        <p>
          <a
            href="https://github.com/ezraRubio/pet-agency-BE"
            className="bg-blue-500 hover:bg-blue-700 w-2/5 md:w-1/6 text-white text-center font-semibold py-2 px-4 rounded"
            target="_blank"
          >
            Check out the back end code here
          </a>
        </p>
        <h1 className="text-bold text-black text-3xl">Music Library Extraction App for MacOS - SwiftUI</h1>
        <p>
          <a
            href="https://github.com/ezraRubio/music-library-extractor"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 w-2/5 md:w-1/6 text-white text-center font-semibold py-2 px-4 rounded"
          >
            Check out the code here
          </a>
        </p>
        <h1 className="text-bold text-black text-3xl">To-Do List App - iOS native example - SwiftUI: </h1>
        <p>
          <a
            href="https://github.com/ezraRubio/to-do_ios"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 w-2/5 md:w-1/6 text-white text-center font-semibold py-2 px-4 rounded"
          >
            Check out the code here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
