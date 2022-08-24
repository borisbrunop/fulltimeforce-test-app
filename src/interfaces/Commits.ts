export interface CommitsTypes { 
    message: string,
    committer: string,
    url: string,
    date: Date,
    filesChanged: number,
    additions: number,
    deletions: number
}

export interface FinalBranchTypes { 
    author: string
    branch: string,
    commits: CommitsTypes[]
}

export interface Branches {
    url: string
}

export interface ReposCommitsTypes {
    repo: string,
    data: FinalBranchTypes[]
}