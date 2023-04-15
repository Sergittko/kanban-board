import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let InProgressContainer = ({ inProgressIssues }) => {
  return (
    <AppColumn
      title={"In Progress"}
      columnId={"In Progress"}
      issuesData={inProgressIssues}
    />
  );
};
let mapStateToProps = (state) => {
  return {
    inProgressIssues: state.issuesData.inProgressIssues,
  };
};
InProgressContainer = connect(mapStateToProps, {})(InProgressContainer);
export default InProgressContainer;
