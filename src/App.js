import style from "./App.module.scss";
import SearchingBarContainer from "./components/SearchingBar/SearchingBarContainer";
import RepoLinkContainer from "./components/RepoLink/RepoLinkContainer";
// import ToDoContainer from "./components/ToDoColumn/ToDoContainer";
// import InProgressContainer from "./components/InProgressColumn/InProgressContainer";
// import DoneContainer from "./components/DoneColumn/DoneContainer";
import ColumnsContainer from "./components/AppColumns/ColumnsContainer";

function App() {
  return (
    <div className={style.appContainer}>
      <SearchingBarContainer />
      <RepoLinkContainer />
      <div className={style.columnsContiner}>
        <ColumnsContainer />
        {/* <ToDoContainer />
        <InProgressContainer />
        <DoneContainer /> */}
      </div>
    </div>
  );
}

export default App;
