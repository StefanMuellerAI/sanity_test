import type { SchemaTypeDefinition } from "sanity";
import { schulung } from "./schulung";

export const schemaTypes: SchemaTypeDefinition[] = [schulung];

export const schema = {
  types: schemaTypes,
};
