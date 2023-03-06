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
  const linkStyle = "text-xl text-semibold";

  return (
    <li>
      <Link href={href} className={linkStyle}>
        {text}
      </Link>
    </li>
  );
}

export default LinkedRoute;
