import { Puff } from 'react-loader-spinner'

interface LoaderTypes {
    size?: string,
    radius?: number,
    color?: string,
    visable?: boolean,
    type?: 'screen' | 'normal'
}

export function Loader({ size = '80', radius = 1, color = '#4fa94d', visable = false, type = 'screen' }: LoaderTypes) {
    return (
        <>
            {type === 'screen' ? (
                <div className='w-full h-full flex justify-center items-center'>
                    <Puff
                        height={size}
                        width={size}
                        radius={radius}
                        color={color}
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            ) : (
                <Puff
                    height={size}
                    width={size}
                    radius={radius}
                    color={color}
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={visable}
                />
            )}
        </>
    )
}
