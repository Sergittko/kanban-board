import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let DoneContainer = ({ doneIssues, isRepoFetching }) => {
  return (
    <AppColumn
      title={"Done"}
      columnId={"Done"}
      issuesData={doneIssues}
      isRepoFetching={isRepoFetching}
    />
  );
};
let mapStateToProps = (state) => {
  return {
    doneIssues: state.issuesData.doneIssues,
    isRepoFetching: state.repoData.isRepoFetching,
  };
};
DoneContainer = connect(mapStateToProps, {})(DoneContainer);
export default DoneContainer;
