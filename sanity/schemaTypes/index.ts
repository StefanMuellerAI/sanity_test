import type { SchemaTypeDefinition } from "sanity";
import { schulung } from "./schulung";
import { blogPost } from "./blogPost";
import { rechtsseite } from "./rechtsseite";
import { teamMitglied } from "./teamMitglied";
import { pressekontakt } from "./pressekontakt";
import { presseveroeffentlichung } from "./presseveroeffentlichung";
import { pressekit } from "./pressekit";

export const schemaTypes: SchemaTypeDefinition[] = [
  schulung,
  blogPost,
  teamMitglied,
  rechtsseite,
  pressekontakt,
  presseveroeffentlichung,
  pressekit,
];

export const schema = {
  types: schemaTypes,
};
