
interface InputNumberTypes {
    onChange: (e: any) => void,
    value: number,
    placeholder?: string,
    label?: string,
    className?: string,
    disabled?: boolean,
}

export const InputNumber = ({
    onChange,
    value,
    placeholder,
    label,
    className = '',
    disabled = false,
}: InputNumberTypes) => {
    return (
        <div key={placeholder} className={className}>
            {label && (
                <label htmlFor="" className="text-darkSecondary font-bold">
                    {label}
                </label>
            )}
            <input
                disabled={disabled}
                min={1}
                className="rounded-lg border-2 border-soft w-full h-12 p-2 text-darkSecondary focus:outline-none focus:border-secondary"
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
};