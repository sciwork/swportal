import { buildCollection } from "@/utils/collectionBuilder";

const collection = "sprint";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

export { generateStaticParams, generateMetadata };

export default Page;
