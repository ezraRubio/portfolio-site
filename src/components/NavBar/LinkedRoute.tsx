import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { getHref, getText } from "./helpers";

function LinkedRoute({
  selected,
  route,
  hook,
}: {
  selected?: boolean;
  route: string;
  hook: Dispatch<SetStateAction<boolean>>;
}) {
  const href = getHref(route);
  const text = getText(route);
  const linkStyle = "px-4 py-2 font-semibold text-xl text-gray-600 rounded";

  return (
    <li>
      <Link
        href={href}
        className={linkStyle}
        onClick={() => hook((prev) => !prev)}
      >
        {text}
      </Link>
    </li>
  );
}

export default LinkedRoute;
