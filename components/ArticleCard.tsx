import { ArticleType } from "@/utils/collection";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ArticleCardProps = {
  article: ArticleType;
  hideDate?: boolean;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, hideDate = false }) => {
  return (
    <div className="border rounded w-100 p-5 mb-3 hover:shadow-lg duration-200 transition-all cursor-pointer flex flex-row gap-3 border-red-800">
      <FontAwesomeIcon icon={faCalendar} className="my-auto text-red-800" size="2xl"></FontAwesomeIcon>
      <div className="flex flex-col">
        <div>
          <h5 className="m-0 text-black">{article.article.title}</h5>
        </div>
        { article.article.location != undefined ? 
            <div className="flex flex-row gap-1">
            <FontAwesomeIcon icon={faMapMarker} className="text-gray-500 w-5 my-auto"></FontAwesomeIcon>
            <p className="my-auto text-gray-500">{article.article.location}</p>
            </div> : null
        }
        <div className="flex flex-row gap-1">
          { hideDate ? null :
            <>
              <FontAwesomeIcon icon={faClock} className="text-gray-500 w-5 my-auto"></FontAwesomeIcon>
              <p className="my-auto text-gray-500">{article.article.date.split(" ")[0]}</p>
            </>
          }
        </div>
      </div>
    </div>
  );
};
