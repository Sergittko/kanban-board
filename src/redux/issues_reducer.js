import { getNewIssues, getInProgressIssues, getDoneIssues } from "../api/api";

const SET_TODO_ISSUES = "SET_TODO_ISSUES";
const SET_IN_PROGRESS_ISSUES = "SET_IN_PROGRESS_ISSUES";
const SET_DONE_ISSUES = "SET_DONE_ISSUES";

const initialState = {
  toDoIssues: null,
  inProgressIssues: null,
  doneIssues: null,
};

const setToDoIssues = (issuesData) => ({
  type: SET_TODO_ISSUES,
  issuesData,
});

const setInProgressIssues = (issuesData) => ({
  type: SET_IN_PROGRESS_ISSUES,
  issuesData,
});

const setDoneIssues = (issuesData) => ({
  type: SET_DONE_ISSUES,
  issuesData,
});

export const getIssuesData = (link) => async (dispatch) => {
  let newIssuesData = await getNewIssues(link);
  let inProgressIssuesData = await getInProgressIssues(link);
  let doneIssuesData = await getDoneIssues(link);
  dispatch(setToDoIssues(newIssuesData));
  dispatch(setInProgressIssues(inProgressIssuesData));
  dispatch(setDoneIssues(doneIssuesData));
};

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_ISSUES:
      return {
        ...state,
        toDoIssues: action.issuesData,
      };

    case SET_IN_PROGRESS_ISSUES:
      return {
        ...state,
        inProgressIssues: action.issuesData,
      };

    case SET_DONE_ISSUES:
      return {
        ...state,
        doneIssues: action.issuesData,
      };

    default:
      return state;
  }
};

export default issuesReducer;
