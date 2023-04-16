import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let ToDoContainer = ({ toDoIssues, isRepoFetching }) => {
  return (
    <AppColumn
      title={"ToDo"}
      columnId={"ToDo"}
      issuesData={toDoIssues}
      isRepoFetching={isRepoFetching}
    />
  );
};
let mapStateToProps = (state) => {
  return {
    isRepoFetching: state.repoData.isRepoFetching,
    toDoIssues: state.issuesData.toDoIssues,
  };
};
ToDoContainer = connect(mapStateToProps, {})(ToDoContainer);
export default ToDoContainer;
