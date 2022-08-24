import { format } from "date-fns";
import { useEffect, useState } from "react"
import { CollapseComponent, ManageLoadScreen } from "../../commons";
import { useRepoCommits } from "../../hooks"
import { CommitsTypes, FinalBranchTypes, ReposCommitsTypes } from "../../interfaces";

export function Commits() {
    const [commits, setCommits] = useState<ReposCommitsTypes[]>();

    const { getCommits } = useRepoCommits()

    useEffect(() => {
        getCommits().then((res: any) => setCommits(res))
        // eslint-disable-next-line
    }, [])

    return (
        <ManageLoadScreen loading={!commits}>
            <>
                <p className="w-full text-center text-4xl mb-10">GITHUB COMMITS</p>
                {commits &&
                    commits.map((commit: ReposCommitsTypes, indexCommit: number) =>
                        <div key={indexCommit}>
                            <CollapseComponent title={<>
                                <p className={` w-full text-center text-3xl py-5 bg-darkSecondary text-white`}>{`${indexCommit ? 'BACK-END REPOSITORY:' : 'FRONT-END REPOSITORY:'}  ${commit.repo}`}</p>
                            </>}>
                                <>
                                    {commit.data.map((item: FinalBranchTypes, indexData: number) =>
                                        <CollapseComponent key={indexData} title={<>
                                            <div className={` py-5 bg-[#22681e] border-b-2 border-darkSecondary text-white`}>
                                                <p className="w-full text-center text-2xl">{`BRANCH: ${item.branch}`}</p>
                                                <p className="w-full text-center text-2xl">{`AUTHOR: ${item.author}`}</p>
                                            </div>
                                        </>} >
                                            <>
                                                {item.commits.map((value: CommitsTypes, indexValue: number) =>
                                                    <div key={indexValue} className="py-2 bg-soft px-5 border-b-2 border-darkSecondary text-xl">
                                                        <p>{`MADE BY: ${value.committer}`}</p>
                                                        <p>{`DATE:  ${format(new Date(value.date), 'yyyy-MM-dd hh:mm')}`}</p>
                                                        <p>{`MESSAGE:  ${value.message}`}</p>
                                                        <p>{`FILES CHANGED:  ${value.filesChanged}`}</p>
                                                        <p>{`ADDITIONS:  ${value.additions}`}</p>
                                                        <p>{`DELETIONS:  ${value.deletions}`}</p>
                                                        <p className="font-bold cursor-pointer" onClick={() => window.open(value.url, '_blank')}>More Details</p>
                                                    </div>
                                                )}
                                            </>
                                        </CollapseComponent>
                                    )

                                    }
                                </>
                            </CollapseComponent>
                        </div>
                    )

                }
            </>
        </ManageLoadScreen>
    )
}
