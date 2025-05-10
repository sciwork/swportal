import { buildCollection, Collection } from "@/utils/collection";
import dayjs from "dayjs";

const collection = "blog";

const { generateStaticParams, generateMetadata, Page } =
  buildCollection(collection);

const BlogPage = async({params,}:{params :Promise<{year:string ; article:string}>}) =>{
  const { year, article } = await params;
  const collectionData = new Collection("blog");
  const data = await collectionData.getArticleData(year, article);
  
  return (
    <div className="max-w-4xl mx-auto px-4 pb-8">
      <div className="mb-8">
        <footer className="post-info text-gray-600">
          <time className="published" dateTime={dayjs(data.date).format("YYYY-MM-DDTHH:mm:ssZ")}>
            {dayjs(data.date).format("ddd DD MMM YYYY")}
          </time>
          {data.author && (
            <address className="vcard author text-gray-600">
              By {data.author}
            </address>
          )}
        </footer>
      </div>
      <Page params={params} />
    </div>
  );
};

generateStaticParams();

export { generateStaticParams, generateMetadata };

export default BlogPage;
