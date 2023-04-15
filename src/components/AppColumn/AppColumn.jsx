import { useEffect, useState } from "react";
import style from "./AppColumn.module.scss";
import IssueItem from "./IssueItem/IssueItem";

function AppColumn({ title, issuesData, columnId }) {
  let [issues, setIssues] = useState(issuesData);
  let [grabbinIssue, setGrabbinIssue] = useState(null);
  useEffect(() => {
    setIssues(issuesData);
  }, [issuesData]);

  return (
    <div className={style.appColumnContainer}>
      <h2>{title}</h2>
      <ul className={style.issuesContainer}>
        {issues ? (
          issues.map((issueItem) => {
            return (
              <IssueItem
                key={issueItem.number + issueItem.title}
                title={issueItem.title}
                number={issueItem.number}
                created_at={issueItem.created_at}
                user={issueItem.user}
                comments={issueItem.comments}
                setGrabbinIssue={setGrabbinIssue}
                setIssues={setIssues}
                issues={issues}
                grabbinIssue={grabbinIssue}
                columnId={columnId}
              />
            );
          })
        ) : (
          <span className={style.noInformation}>No information</span>
        )}
      </ul>
    </div>
  );
}

export default AppColumn;
