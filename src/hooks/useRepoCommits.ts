import axios from "axios";
import { useCallback } from "react";
import { CommitsTypes, FinalBranchTypes } from "../interfaces";

export function useRepoCommits() {
  const getAllCommits = useCallback(
    async (url: string, repoName: string) => {
      var finalBranchesCommits: FinalBranchTypes[] = [];
      const branches = await axios.get(`${url}/branches`);
      for (const branch of branches.data) {
        var finalBranch: FinalBranchTypes = {
          branch: branch.name,
          author: "",
          commits: [],
        };
        const urlCommits = `${url}/commits?sha=${branch.name}`;
        const commits = await axios.get(urlCommits);
        for (const committ of commits.data) {
          const commit = committ.commit;
          const commitInfo = await axios.get(committ.url);
          var individualCommit: CommitsTypes = {
            message: commit.message,
            committer: commit.committer.name,
            date: commit.committer.date,
            url: `https://github.com/borisbrunop/${repoName}/commit/${commitInfo.data.sha}`,
            filesChanged: commitInfo.data.files.length,
            additions: commitInfo.data.stats.additions,
            deletions: commitInfo.data.stats.deletions,
          };
          finalBranch = {
            ...finalBranch,
            author: commit.author.name,
            commits: [...finalBranch.commits, individualCommit],
          };
        }
        finalBranchesCommits = [...finalBranchesCommits, finalBranch];
      }
      return finalBranchesCommits;
    },
    []
  );

  const getCommits = async () => {
    try {
      const urlBranchesApp = `https://api.github.com/repos/borisbrunop/fulltimeforce-test-app`;
      const urlBranchesWeb = `https://api.github.com/repos/borisbrunop/fultimeforce-test`;
      const finishApp = await getAllCommits(
        urlBranchesApp,
        "fulltimeforce-test-app"
      );
      const finishWeb = await getAllCommits(
        urlBranchesWeb,
        "fultimeforce-test"
      );
      const response = [
        { repo: "fulltimeforce-test-app", data: finishApp },
        { repo: "fulltimeforce-test", data: finishWeb },
      ];
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  return { getCommits };
}
