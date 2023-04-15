import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/repos/",
});

export const getNewIssues = (link) => {
  return instance
    .get(`${link}/issues?state=open`)
    .then((response) => response.data.filter((item) => item.assignee === null));
};

export const getInProgressIssues = (link) => {
  return instance
    .get(`${link}/issues?state=open&filter=assigned`)
    .then((response) => response.data.filter((item) => item.assignee !== null));
};

export const getDoneIssues = (link) => {
  return instance
    .get(`${link}/issues?state=closed`)
    .then((response) => response.data);
};

export const getRepoData = (link) => {
  return instance.get(`${link}`);
};
