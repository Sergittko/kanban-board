import { getIssuesData } from "../../redux/issues_reducer";
import { getRepositoryData, setRepoUrl } from "../../redux/repoData_reducer";
import SearchingBar from "./SearchingBar";
import { connect } from "react-redux";

let SearchingBarContainer = (props) => {
  return (
    <SearchingBar
      getIssuesData={props.getIssuesData}
      getRepositoryData={props.getRepositoryData}
      setRepoUrl={props.setRepoUrl}
    />
  );
};

SearchingBarContainer = connect(() => ({}), {
  getIssuesData,
  setRepoUrl,
  getRepositoryData,
})(SearchingBarContainer);
export default SearchingBarContainer;
