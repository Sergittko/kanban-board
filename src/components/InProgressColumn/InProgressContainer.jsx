import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let InProgressContainer = ({ inProgressIssues, isRepoFetching, repoUrl }) => {
  return (
    <AppColumn
      title={"In Progress"}
      columnId={"In Progress"}
      issueCategory={"inProgressIssues"}
      issuesData={inProgressIssues}
      isRepoFetching={isRepoFetching}
      repoUrl={repoUrl}
    />
  );
};
let mapStateToProps = (state) => {
  return {
    inProgressIssues: state.issuesData.inProgressIssues,
    isRepoFetching: state.repoData.isRepoFetching,
    repoUrl: state.repoData.repoUrl,
  };
};
InProgressContainer = connect(mapStateToProps, {})(InProgressContainer);
export default InProgressContainer;
