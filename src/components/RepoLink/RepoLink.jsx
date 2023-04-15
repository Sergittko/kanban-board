import style from "./RepoLink.module.scss";
import star from "../../assets/star2.png";

function RepoLink({ repoUrl, repoData }) {
  let pathname = repoUrl.pathname;
  let repoName = pathname.slice(pathname.lastIndexOf("/") + 1);
  let profileHref = repoUrl.href.slice(0, repoUrl.href.lastIndexOf("/"));
  let profileName = pathname.slice(
    pathname.indexOf("/") + 1,
    pathname.lastIndexOf("/")
  );
  let countStars = (starsNumber) => {
    if (starsNumber > 1000) {
      return starsNumber.toString().slice(0, -3) + "K";
    }
    return starsNumber;
  };
  let starsNumber = countStars(repoData.data.stargazers_count);

  return (
    <div className={style.repoLinkContainer}>
      <a href={profileHref} target="_blank" rel="noopener noreferrer">
        {profileName}
      </a>
      <span className={style.pathChar}>{">"}</span>

      <a href={repoUrl.href} target="_blank" rel="noopener noreferrer">
        {repoName}
      </a>
      <img src={star} alt="" />
      <span>{starsNumber} stars</span>
    </div>
  );
}

export default RepoLink;
