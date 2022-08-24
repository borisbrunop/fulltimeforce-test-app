
interface InputTextAreaTypes {
    setValue: (e: any) => void,
    value: string,
    cols?: number,
    rows?: number,
    title?: string,
    textHelper?: string,
    classNameTextHelper?: string,
    className?: string,
    disabled?: boolean,
}

export const InputTextArea = ({
    value = '',
    setValue,
    title,
    cols = 40,
    rows = 8,
    className = "",
    disabled = false,
    textHelper,
    classNameTextHelper
}: InputTextAreaTypes) => {
    return (
        <>
            {disabled ? (
                <div className={`${className}`}>
                    {title && <p className="text-darkSecondary font-bold">{title}</p>}
                    <div className="flex w-full px-5 pb-24 pt-5 justify-between text-darkSecondary border border-soft rounded">
                        {value}
                    </div>
                    {textHelper &&
                        <p className={classNameTextHelper}>{textHelper}</p>
                    }
                </div>
            ) : (
                <div className={`${className}`}>
                    {title && <p className="text-darkSecondary font-bold">{title}</p>}
                    <div className="flex w-full justify-between text-darkSecondary border-2 border-soft rounded">
                        <textarea
                            className="p-5 w-full"
                            onChange={(e) => setValue(e.target.value)}
                            cols={cols}
                            rows={rows}
                            disabled={disabled}
                            value={value}
                        />
                    </div>
                    {textHelper &&
                        <p className={classNameTextHelper}>{textHelper}</p>
                    }
                </div>
            )}
        </>
    );
};