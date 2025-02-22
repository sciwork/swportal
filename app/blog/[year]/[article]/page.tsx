import { buildCollection } from "@/utils/collectionBuilder";

const collection = "blog";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

generateStaticParams();

export { generateStaticParams, generateMetadata };

export default Page;
