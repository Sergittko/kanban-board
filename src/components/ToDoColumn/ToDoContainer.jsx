import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";
import { setRepoFetching } from "../../redux/repoData_reducer";

let ToDoContainer = ({
  toDoIssues,
  isRepoFetching,
  repoUrl,
  setRepoFetching,
}) => {
  return (
    <AppColumn
      title={"ToDo"}
      columnId={"ToDo"}
      issueCategory={"toDoIssues"}
      issuesData={toDoIssues}
      isRepoFetching={isRepoFetching}
      repoUrl={repoUrl}
      setRepoFetching={setRepoFetching}
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
ToDoContainer = connect(mapStateToProps, { setRepoFetching })(ToDoContainer);
export default ToDoContainer;
