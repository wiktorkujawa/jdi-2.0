import { CollectionConfig } from "payload";
import { Button } from "@/fields/elements";
import { revalidateProject } from "./hooks/revalidateProject";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateProject]
  },
  fields: [
    {
      name: "name",
      type: "text",
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    {
      label: "Media URL",
      name: "mediaUrl",
      type: "text",
    },
      {
        type: "array",
        name: "buttons",
        fields: [
          Button
        ],
      },
  ],
};
