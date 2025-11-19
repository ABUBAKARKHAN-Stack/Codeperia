import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { serviceType } from "./serviceType";
import { reviewType } from "./reviewType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, serviceType,reviewType],
};
