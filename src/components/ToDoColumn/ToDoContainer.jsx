import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let ToDoContainer = ({ toDoIssues, isRepoFetching, repoUrl }) => {
  return (
    <AppColumn
      title={"ToDo"}
      columnId={"ToDo"}
      issueCategory={"toDoIssues"}
      issuesData={toDoIssues}
      isRepoFetching={isRepoFetching}
      repoUrl={repoUrl}
    />
  );
};
let mapStateToProps = (state) => {
  return {
    isRepoFetching: state.repoData.isRepoFetching,
    toDoIssues: state.issuesData.toDoIssues,
    repoUrl: state.repoData.repoUrl,
  };
};
ToDoContainer = connect(mapStateToProps, {})(ToDoContainer);
export default ToDoContainer;
