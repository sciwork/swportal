import { buildCollection } from "@/utils/collection";

const collection = "blog";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

export { generateStaticParams, generateMetadata };

export default Page;
