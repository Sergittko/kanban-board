import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let DoneContainer = ({ doneIssues, isRepoFetching, repoUrl }) => {
  return (
    <AppColumn
      title={"Done"}
      columnId={"Done"}
      issueCategory={"doneIssues"}
      issuesData={doneIssues}
      isRepoFetching={isRepoFetching}
      repoUrl={repoUrl}
    />
  );
};
let mapStateToProps = (state) => {
  return {
    doneIssues: state.issuesData.doneIssues,
    isRepoFetching: state.repoData.isRepoFetching,
    repoUrl: state.repoData.repoUrl,
  };
};
DoneContainer = connect(mapStateToProps, {})(DoneContainer);
export default DoneContainer;
