import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";

let DoneContainer = ({ doneIssues }) => {
  return <AppColumn title={"Done"} columnId={"Done"} issuesData={doneIssues} />;
};
let mapStateToProps = (state) => {
  return {
    doneIssues: state.issuesData.doneIssues,
  };
};
DoneContainer = connect(mapStateToProps, {})(DoneContainer);
export default DoneContainer;
