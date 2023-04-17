import { connect } from "react-redux";
import AppColumn from "../AppColumn/AppColumn";
import { setRepoFetching } from "../../redux/repoData_reducer";

let DoneContainer = ({
  doneIssues,
  isRepoFetching,
  repoUrl,
  setRepoFetching,
}) => {
  return (
    <AppColumn
      title={"Done"}
      columnId={"Done"}
      issueCategory={"doneIssues"}
      issuesData={doneIssues}
      isRepoFetching={isRepoFetching}
      repoUrl={repoUrl}
      setRepoFetching={setRepoFetching}
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
DoneContainer = connect(mapStateToProps, { setRepoFetching })(DoneContainer);
export default DoneContainer;
