import style from "./IssueItem.module.scss";

function IssueItem({
  issueItem,
  columnId,
  column,
  setColumns,
  grabbinIssue,
  setGrabbinIssue,
  grabbinColumn,
  setGrabbinColumn,
}) {
  const created = new Date(issueItem.created_at);
  const today = new Date();
  const dateCreated = created.getDate();
  const dateToday = today.getDate();
  const monthCreated = created.getMonth();
  const monthToday = today.getMonth();
  let daysPast = null;

  if (monthCreated === monthToday) {
    if (dateToday - dateCreated === 0) daysPast = "today";
    if (dateToday - dateCreated === 1) daysPast = "yesterday";
    if (dateToday - dateCreated > 1)
      daysPast = `${dateToday - dateCreated} days ago`;
  }

  let dragStartHandler = (e, issue, column) => {
    setGrabbinIssue(issue);
    setGrabbinColumn(column);
  };

  let dragEndHandler = (e) => {
    e.currentTarget.style.background = "white";
  };

  let dragDropHandler = (e, issue, column) => {
    e.preventDefault();
    e.currentTarget.style.background = "white";
    const grabbingIndex = grabbinColumn.issues.indexOf(grabbinIssue);
    const droppingIndex = column.issues.indexOf(issue);
    setColumns((prev) => {
      return prev.map((item) => {
        if (
          grabbinColumn.columnId === item.columnId &&
          item.columnId === columnId
        ) {
          delete item.issues[grabbingIndex];
          delete item.issues[droppingIndex];
          item.issues[grabbingIndex] = issue;
          item.issues[droppingIndex] = grabbinIssue;
          return item;
        }

        if (
          item.columnId === columnId &&
          item.columnId !== grabbinColumn.columnId &&
          item.issues.indexOf(grabbinIssue) === -1
        ) {
          item.issues.splice(droppingIndex, 0, grabbinIssue);
          return item;
        }

        if (
          item.columnId === grabbinColumn.columnId &&
          item.columnId !== columnId &&
          item.issues.indexOf(grabbinIssue) !== -1
        ) {
          item.issues.splice(grabbingIndex, 1);
          return item;
        }

        return item;
      });
    });
  };

  let dragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.background = "#e5eaef";
  };

  let dragLeaveHandler = (e) => {
    e.currentTarget.style.background = "white";
  };

  return (
    <li
      className={style.issue}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, issueItem, column)}
      onDrop={(e) => dragDropHandler(e, issueItem, column)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
    >
      <h4 className={style.issueTitle}>{issueItem.title}</h4>
      <div className={style.issueData}>
        <span>#{issueItem.number}</span>
        <span>
          opened {daysPast || [...issueItem.created_at].splice(0, 10)}
        </span>
      </div>
      <div className={style.issueInfo}>
        <span>{issueItem.user.login}</span>
        <span className={style.stick}>|</span>
        <span>Comments: {issueItem.comments}</span>
      </div>
    </li>
  );
}

export default IssueItem;
