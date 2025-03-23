import { buildCollection } from "@/utils/collection";

const collection = "meetup";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

export { generateStaticParams, generateMetadata };

export default Page;
