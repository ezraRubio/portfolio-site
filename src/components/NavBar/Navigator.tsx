import { routes } from "@/models/enums";
import LinkedRoute from "./LinkedRoute";

function Navigator() {
  return (
    <ul>
      {(Object.values(routes) as string[])?.map((route) => (
        <LinkedRoute route={route} key={route} />
      ))}
    </ul>
  );
}

export default Navigator;
