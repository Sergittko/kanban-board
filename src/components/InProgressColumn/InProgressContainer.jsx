import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let InProgressContainer = ({ inProgressIssues, isRepoFetching }) => {
  return (
    <AppColumn
      title={"In Progress"}
      columnId={"In Progress"}
      issuesData={inProgressIssues}
      isRepoFetching={isRepoFetching}
    />
  );
};
let mapStateToProps = (state) => {
  return {
    inProgressIssues: state.issuesData.inProgressIssues,
    isRepoFetching: state.repoData.isRepoFetching,
  };
};
InProgressContainer = connect(mapStateToProps, {})(InProgressContainer);
export default InProgressContainer;
