
interface InputTextTypes {
    onChange: (e: any) => void,
    value: string,
    placeholder?: string,
    label?: string,
    className?: string,
    disabled?: boolean,
}

export const InputText = ({
    onChange,
    value,
    placeholder,
    label,
    className = '',
    disabled = false,
}: InputTextTypes) => {
    return (
        <div key={placeholder} className={className}>
            {label && (
                <label htmlFor="" className="text-darkSecondary font-bold">
                    {label}
                </label>
            )}
            <input
                disabled={disabled}
                className="rounded-lg border-2 border-soft w-full h-12 p-2 text-darkSecondary focus:outline-none focus:border-secondary"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
};
