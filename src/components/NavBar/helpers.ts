import { routes } from "@/models/enums";

export function getHref(route: string): string {
  if (route === routes.PROJECTS) return `/${routes.PROJECTS.toLowerCase()}`;
  if (route === routes.CONTACT) return `/${routes.CONTACT.toLowerCase()}`;
  return "/";
}

export function getText(route: string): string {
  if (route === routes.PROJECTS) return routes.PROJECTS;
  if (route === routes.CONTACT) return routes.CONTACT;
  return routes.HOME;
}
