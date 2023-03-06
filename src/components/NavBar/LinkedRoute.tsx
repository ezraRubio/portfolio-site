import { routes } from "@/models/enums";
import Link from "next/link";
import { getHref, getText } from "./helpers";

function LinkedRoute({
  selected,
  route,
}: {
  selected?: boolean;
  route: string;
}) {
  const href = getHref(route);
  const text = getText(route);
  return (
    <li>
      <Link href={href}> {text} </Link>
    </li>
  );
}

export default LinkedRoute;
