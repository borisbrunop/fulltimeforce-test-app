export interface HandleAxiosTypes {
    path: string,
    method: string,
    body?: Object,
    postFetch: (res: any) => void,
    postErrorFetch?: (err: any) => void,
    setWork?: (work: boolean) => void,
    errorToast?: string,
}

export interface handleUseEffectAxiosTypes {
    path: string,
    method: string,
    postFetch: (res: any) => void,
}