import { useEffect, useState } from "react";
import style from "./AppColumn.module.scss";
import IssueItem from "./IssueItem/IssueItem";
import preloader from "../../assets/preloader.gif";
import { setSessionData } from "../../api/sessionStorageApi";

function AppColumn({
  title,
  issuesData,
  columnId,
  isRepoFetching,
  repoUrl,
  issueCategory,
}) {
  sessionStorage.setItem("repoHistory", "[]");
  let [issues, setIssues] = useState(issuesData);
  let [grabbinIssue, setGrabbinIssue] = useState(null);
  useEffect(() => {
    setIssues(issuesData);
  }, [issuesData]);

  issues && repoUrl && setSessionData(repoUrl, issueCategory, issues);
  return (
    <div className={style.appColumnContainer}>
      <h2>{title}</h2>
      <ul className={style.issuesContainer}>
        {!isRepoFetching && issues ? (
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
