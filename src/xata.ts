// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "tags",
    columns: [{ name: "name", type: "text" }],
    revLinks: [
      { column: "tag", table: "brands_tags" },
      { column: "tag", table: "brands" },
    ],
  },
  {
    name: "brands",
    columns: [
      { name: "name", type: "string" },
      { name: "price", type: "int" },
      { name: "marked", type: "int" },
      { name: "imageUrl", type: "text" },
      { name: "mark_reason", type: "text" },
      { name: "location", type: "link", link: { table: "locations" } },
      { name: "owned_by", type: "link", link: { table: "brands" } },
      { name: "tag", type: "link", link: { table: "tags" } },
    ],
    revLinks: [
      { column: "brand", table: "mark_sources" },
      { column: "brand", table: "brands_tags" },
      { column: "owned_by", table: "brands" },
    ],
  },
  {
    name: "brands_tags",
    columns: [
      { name: "tag", type: "link", link: { table: "tags" } },
      { name: "brand", type: "link", link: { table: "brands" } },
    ],
  },
  {
    name: "mark_sources",
    columns: [
      { name: "name", type: "text" },
      { name: "url", type: "text" },
      { name: "brand", type: "link", link: { table: "brands" } },
    ],
  },
  {
    name: "locations",
    columns: [{ name: "name", type: "text", notNull: true, defaultValue: "" }],
    revLinks: [{ column: "location", table: "brands" }],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Tags = InferredTypes["tags"];
export type TagsRecord = Tags & XataRecord;

export type Brands = InferredTypes["brands"];
export type BrandsRecord = Brands & XataRecord;

export type BrandsTags = InferredTypes["brands_tags"];
export type BrandsTagsRecord = BrandsTags & XataRecord;

export type MarkSources = InferredTypes["mark_sources"];
export type MarkSourcesRecord = MarkSources & XataRecord;

export type Locations = InferredTypes["locations"];
export type LocationsRecord = Locations & XataRecord;

export type DatabaseSchema = {
  tags: TagsRecord;
  brands: BrandsRecord;
  brands_tags: BrandsTagsRecord;
  mark_sources: MarkSourcesRecord;
  locations: LocationsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Abui-s-workspace-603dfk.ap-southeast-2.xata.sh/db/invofest",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({ apiKey: process.env.XATA_API_KEY });
  return instance;
};
