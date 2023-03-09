import { title } from "@/models/constants";
import { routes } from "@/models/enums";
import LinkedRoute from "./LinkedRoute";

function Navigator() {
  const navStyle = "flex flex-row items-center justify-end mt-1 space-x-6 mr-2";
  const titleStyle = "-mb-8 text-xl text-bold mt-1 ml-2" 
  
  return (
    <div className="fixed top-0 z-10 w-full">
      <h1 className={titleStyle}>{ title }</h1>
      <ul className={navStyle}>
        {(Object.values(routes) as string[])?.map((route) => (
          <LinkedRoute route={route} key={route} />
        ))}
      </ul>
    </div>
  );
}

export default Navigator;
