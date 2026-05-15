import type { SchemaTypeDefinition } from "sanity";
import { schulung } from "./schulung";
import { blogPost } from "./blogPost";

export const schemaTypes: SchemaTypeDefinition[] = [schulung, blogPost];

export const schema = {
  types: schemaTypes,
};
