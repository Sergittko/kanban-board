import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";
import { setRepoFetching } from "../../redux/repoData_reducer";

let InProgressContainer = ({
  inProgressIssues,
  isRepoFetching,
  repoUrl,
  setRepoFetching,
}) => {
  return (
    <AppColumn
      title={"In Progress"}
      columnId={"In Progress"}
      issueCategory={"inProgressIssues"}
      issuesData={inProgressIssues}
      isRepoFetching={isRepoFetching}
      repoUrl={repoUrl}
      setRepoFetching={setRepoFetching}
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
InProgressContainer = connect(mapStateToProps, { setRepoFetching })(
  InProgressContainer
);
export default InProgressContainer;
