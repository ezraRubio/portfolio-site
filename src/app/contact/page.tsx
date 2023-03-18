function Contact() {
  return (
    <div className="ml-8">
      <h2 className="mt-28">coming soon</h2>
      <h3> Ezra Rubio </h3>
      <h3> ezra@ezrarubio.com</h3>
      <h3> 0585504711 </h3>
      <div className="flex flex-row space-x-4">
        <a
          href="https://www.linkedin.com/in/ezrarubio/"
          className="bg-blue-500 hover:bg-blue-700 text-white text-center font-semibold py-2 px-4 rounded w-1/6"
        >
          Linked In
        </a>
        <a
          href="https://github.com/ezraRubio"
          className="bg-blue-500 hover:bg-blue-700 text-white text-center font-semibold py-2 px-4 rounded w-1/6"
        >
          {" "}
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
