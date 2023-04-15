import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let ToDoContainer = ({ toDoIssues }) => {
  return <AppColumn title={"ToDo"} columnId={"ToDo"} issuesData={toDoIssues} />;
};
let mapStateToProps = (state) => {
  return {
    toDoIssues: state.issuesData.toDoIssues,
  };
};
ToDoContainer = connect(mapStateToProps, {})(ToDoContainer);
export default ToDoContainer;
