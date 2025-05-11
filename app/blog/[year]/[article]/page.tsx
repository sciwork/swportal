import { buildCollection } from "@/utils/collection";

const collection = "blog";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection,{ showAuthor: true, showDate: true });

export { generateStaticParams, generateMetadata };

export default Page;
