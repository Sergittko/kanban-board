export const setSessionData = (repoUrl, issueCategory, issues) => {
  let storedData = JSON.parse(sessionStorage.getItem(repoUrl));

  sessionStorage.setItem(
    repoUrl.href,
    JSON.stringify({ ...storedData, [issueCategory]: issues })
  );
};

export const getStoredRepo = (repoUrl) => {
  return JSON.parse(sessionStorage.getItem(repoUrl));
};
