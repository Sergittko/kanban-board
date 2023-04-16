import style from "./IssueItem.module.scss";

function IssueItem({
  title,
  number,
  created_at,
  user,
  comments,
  setGrabbinIssue,
  setIssues,
  issues,
  grabbinIssue,
  columnId,
}) {
  const created = new Date(created_at);
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

  let dragStartHandler = (e, issue) => {
    setGrabbinIssue({
      ...issue,
      currentColumn: e.currentTarget.dataset.column,
    });
  };

  let dragEndHandler = (e) => {
    e.currentTarget.style.background = "white";
  };

  let dragDropHandler = (e, issue) => {
    e.preventDefault();
    e.currentTarget.style.background = "white";
    if (!grabbinIssue?.currentColumn) return;
    setIssues(
      issues.map((item) => {
        if (item.number === issue.number) {
          return { ...grabbinIssue };
        }
        if (item.number === grabbinIssue.number) {
          return { ...issue };
        }
        return item;
      })
    );
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
      data-column={columnId}
      onDragStart={(e) =>
        dragStartHandler(e, {
          title,
          number,
          created_at,
          user,
          comments,
        })
      }
      onDrop={(e) =>
        dragDropHandler(e, { title, number, created_at, user, comments })
      }
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
    >
      <h4 className={style.issueTitle}>{title}</h4>
      <div className={style.issueData}>
        <span>#{number}</span>
        <span>opened {daysPast || [...created_at].splice(0, 10)}</span>
      </div>
      <div className={style.issueInfo}>
        <span>{user.login}</span>
        <span className={style.stick}>|</span>
        <span>Comments: {comments}</span>
      </div>
    </li>
  );
}

export default IssueItem;
