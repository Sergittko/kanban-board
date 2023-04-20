import { connect } from "react-redux";
import AppColumn from "./AppColumn";
import { setRepoFetching } from "../../redux/repoData_reducer";
import { useEffect, useState } from "react";

let ColumnsContainer = ({
  toDoIssues,
  inProgressIssues,
  doneIssues,
  isRepoFetching,
  repoUrl,
  setRepoFetching,
}) => {
  let [grabbinIssue, setGrabbinIssue] = useState(null);
  let [grabbinColumn, setGrabbinColumn] = useState(null);
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns([
      {
        columnId: 1,
        title: "ToDo",
        issues: toDoIssues,
        issueCategory: "toDoIssues",
      },
      {
        columnId: 2,
        title: "In Progress",
        issues: inProgressIssues,
        issueCategory: "inProgressIssues",
      },
      {
        columnId: 3,
        title: "Done",
        issues: doneIssues,
        issueCategory: "doneIssues",
      },
    ]);
    setRepoFetching(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toDoIssues, inProgressIssues, doneIssues]);

  return (
    <>
      {columns.map((column) => {
        return (
          <AppColumn
            key={column.title + column.id}
            title={column.title}
            issuesData={column.issues}
            columnId={column.columnId}
            column={column}
            isRepoFetching={isRepoFetching}
            repoUrl={repoUrl}
            issueCategory={column.issueCategory}
            setColumns={setColumns}
            grabbinIssue={grabbinIssue}
            setGrabbinIssue={setGrabbinIssue}
            grabbinColumn={grabbinColumn}
            setGrabbinColumn={setGrabbinColumn}
          />
        );
      })}
    </>
  );
};
let mapStateToProps = (state) => {
  return {
    toDoIssues: state.issuesData.toDoIssues,
    inProgressIssues: state.issuesData.inProgressIssues,
    doneIssues: state.issuesData.doneIssues,
    isRepoFetching: state.repoData.isRepoFetching,
    repoUrl: state.repoData.repoUrl,
  };
};
ColumnsContainer = connect(mapStateToProps, { setRepoFetching })(
  ColumnsContainer
);
export default ColumnsContainer;
