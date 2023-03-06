import { routes } from "@/models/enums";
import LinkedRoute from "./LinkedRoute";

function Navigator() {
  const navStyle = "flex flex-row items-center justify-end mt-1 space-x-6";
  return (
    <ul className={navStyle}>
      {(Object.values(routes) as string[])?.map((route) => (
        <LinkedRoute route={route} key={route} />
      ))}
    </ul>
  );
}

export default Navigator;
