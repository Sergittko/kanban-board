import style from "./App.module.scss";
import SearchingBarContainer from "./components/SearchingBar/SearchingBarContainer";
import RepoLinkContainer from "./components/RepoLink/RepoLinkContainer";
import ColumnsContainer from "./components/AppColumns/ColumnsContainer";

function App() {
  return (
    <div className={style.appContainer}>
      <SearchingBarContainer />
      <RepoLinkContainer />
      <div className={style.columnsContiner}>
        <ColumnsContainer />
      </div>
    </div>
  );
}

export default App;
