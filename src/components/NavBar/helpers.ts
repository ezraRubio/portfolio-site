import { Routes } from "@/models/enums";

export function getHref(route: string): string {
  if (route === Routes.PROJECTS) return `/${Routes.PROJECTS.toLowerCase()}`;
  if (route === Routes.CONTACT) return `/${Routes.CONTACT.toLowerCase()}`;
  return "/";
}

export function getText(route: string): string {
  if (route === Routes.PROJECTS) return Routes.PROJECTS;
  if (route === Routes.CONTACT) return Routes.CONTACT;
  return Routes.HOME;
}
