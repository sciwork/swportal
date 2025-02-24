import { buildCollection } from "@/utils/collection";

const collection = "training";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

generateStaticParams();

export { generateStaticParams, generateMetadata };

export default Page;
