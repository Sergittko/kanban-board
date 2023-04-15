import RepoLink from "./RepoLink";
import { connect } from "react-redux";

let RepoLinkContainer = (props) => {
  return props.repoUrl && props.repoData ? (
    <RepoLink repoUrl={props.repoUrl} repoData={props.repoData} />
  ) : (
    <span
      style={{
        margin: "10px 0",
        height: "20px",
      }}
    >
      Enter a repository URL to get issues
    </span>
  );
};
let mapStateToProps = (state) => {
  return {
    repoUrl: state.repoData.repoUrl,
    repoData: state.repoData.repositoryData,
  };
};
RepoLinkContainer = connect(mapStateToProps, {})(RepoLinkContainer);
export default RepoLinkContainer;
