import fs from "node:fs";

interface Category {
  label: string;
  translations?: {
    [key: string]: string;
  };
  link?: string;
  autogenerate?: { directory: string };
  items?: { label: string; link: string }[];
}

function toCategory(name: string): Category {
  return {
    label: name.charAt(0).toUpperCase() + name.slice(1),
    autogenerate: { directory: name },
  };
}

export function findCategories(path: string, langs: string[] = []): Category[] {
  const entries = fs.readdirSync(path, { withFileTypes: true });

  return entries
    .filter((entry) => {
      for (const lang of langs) {
        if (lang === entry.name) {
          return false;
        }
      }

      return entry.isDirectory();
    })
    .map((entry) => {
      return toCategory(entry.name);
    });
}
