import { faTags } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

const TagIcon = (props: FontAwesomeIconProps) => {
  return <FontAwesomeIcon {...props} icon={faTags} />;
};

export default TagIcon;
