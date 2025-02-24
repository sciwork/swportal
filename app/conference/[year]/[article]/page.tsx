import { buildCollection } from "@/utils/collection";

const collection = "conference";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

export { generateStaticParams, generateMetadata };

export default Page;
