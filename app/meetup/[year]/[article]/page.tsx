import { buildCollection } from "@/utils/collection";

const collection = "meetup";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

generateStaticParams();

export { generateStaticParams, generateMetadata };

export default Page;
