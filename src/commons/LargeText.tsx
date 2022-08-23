
interface LargeTextTypes {
    maxLength: number,
    cutValue: number,
    value: string,
    className?: string,
}

export function LargeText({ maxLength, cutValue, value, className = '' }: LargeTextTypes) {
    // const regex = useMemo(() => 
    // new RegExp( '.{1,' + cutValue + '}', 'g' )
    // ,[cutValue]); 

    // const finalValue =  value.match(regex) ? value.match(regex) : '';
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