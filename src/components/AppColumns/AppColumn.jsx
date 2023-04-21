import style from "./AppColumn.module.scss";
import IssueItem from "./IssueItem/IssueItem";
import preloader from "../../assets/preloader.gif";
import { setSessionData } from "../../api/sessionStorageApi";

function AppColumn({
  title,
  issuesData,
  columnId,
  column,
  isRepoFetching,
  repoUrl,
  issueCategory,
  setColumns,
  grabbinIssue,
  setGrabbinIssue,
  grabbinColumn,
  setGrabbinColumn,
}) {
  issuesData && repoUrl && setSessionData(repoUrl, issueCategory, issuesData);

  let dragOverHandler = (e) => {
    e.preventDefault();
  };

  let dropIssueHandler = (e, column) => {
    e.preventDefault();
    const grabbingIndex = grabbinColumn.issues.indexOf(grabbinIssue);
    setColumns((prev) => {
      let addedToEmpty = column.issues.length === 0;
      return prev.map((item) => {
        if (column.columnId === item.columnId && item.issues.length === 0) {
          addedToEmpty = true;
          let newColumn = { ...item };
          newColumn.issues[0] = grabbinIssue;
          return newColumn;
        }

        // if (
        //   column.columnId === item.columnId &&
        //   column.issues.indexOf(grabbinIssue) === -1 &&
        //   item.issues.length !== 0
        // ) {
        //   addedToEmpty = true;
        //   item.issues.push(grabbinIssue);
        //   return item;
        // }

        if (
          grabbinColumn.columnId === item.columnId &&
          item.issues.indexOf(grabbinIssue) !== -1 &&
          addedToEmpty === true
        ) {
          let newColumn = { ...item };
          newColumn.issues.splice(grabbingIndex, 1);
          return newColumn;
        }
        return item;
      });
    });
  };

  return (
    <div
      className={style.appColumnContainer}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropIssueHandler(e, column)}
    >
      <h2>{title}</h2>
      <ul className={style.issuesContainer}>
        {!isRepoFetching && issuesData?.length ? (
          issuesData.map((issueItem) => {
            return (
              <IssueItem
                key={issueItem.number + issueItem.title}
                issueItem={issueItem}
                issues={issuesData}
                columnId={columnId}
                column={column}
                setColumns={setColumns}
                grabbinIssue={grabbinIssue}
                setGrabbinIssue={setGrabbinIssue}
                grabbinColumn={grabbinColumn}
                setGrabbinColumn={setGrabbinColumn}
              />
            );
          })
        ) : (
          <div className={style.noInformation}>
            {isRepoFetching ? (
              <img
                src={preloader}
                alt="preloader"
                className={style.preloader}
              />
            ) : (
              "No information"
            )}
          </div>
        )}
      </ul>
    </div>
  );
}

export default AppColumn;
