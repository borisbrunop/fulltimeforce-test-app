
interface LargeTextTypes {
    maxLength: number,
    cutValue: number,
    value: string,
    className?: string,
}

export function LargeText({ maxLength, cutValue, value, className = '' }: LargeTextTypes) {
    function split(str: string, index: number) {
        const result = [str.slice(0, index), str.slice(index)];
        return result;
    }

    return (
        <p className={className}>
            {value.length > maxLength
                ? (<>{`${split(value, cutValue)[0]}...`}</>)
                : value}
        </p>
    );
};