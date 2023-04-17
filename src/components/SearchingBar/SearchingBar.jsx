import { useState } from "react";
import style from "./SearchingBar.module.scss";
import cross from "../../assets/cross.png";

function SearchingBar({ getIssuesData, setRepoUrl, getRepositoryData }) {
  let [inputText, setNewText] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    let expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

    if (event.target[0].value.match(regex)) {
      let url = new URL(event.target[0].value);
      if (url.host !== "github.com") return;
      let pathname = url.pathname.slice(1);
      setRepoUrl(url);
      getIssuesData(pathname, url.href);
      getRepositoryData(pathname);
    }
  };

  return (
    <div className={style.searchingBarContainer}>
      <form className={style.formContaier} onSubmit={handleSubmit}>
        <div className={style.searchingInput}>
          <input
            type="text"
            value={inputText}
            name="urlInput"
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Enter repo URL"
          />
          {inputText.length > 2 && (
            <img src={cross} alt="cross" onClick={() => setNewText("")} />
          )}
        </div>
        <input
          type="submit"
          value="Load issues"
          className={style.submitButton}
        />
      </form>
    </div>
  );
}

export default SearchingBar;
