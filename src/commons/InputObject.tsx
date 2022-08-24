import { useState } from 'react'
import { InputText } from './InputText'
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import uniqid from 'uniqid';

interface InputObjectTypes {
    setArrayValue: (e: any) => void,
    arrayValue: { [key: string]: string }[],
    label?: string,
    disabled?: boolean,
}
interface arrayValueTypes {
    [key: string]: string,
}

export function InputObject({ arrayValue, setArrayValue, label }: InputObjectTypes) {
    const [key, setKey] = useState<string>()
    const [value, setValue] = useState<string>()
    const handleOnAdd = (id: string) => {
        if (!key || !value) {
            return
        }
        setArrayValue([...arrayValue, { key, value, id }])
        setKey('')
        setValue('')
    }

    const handleOnDelete = (id: string) => {
        setArrayValue(arrayValue.filter((item: arrayValueTypes) => item.id !== id))
    }

    return (
        <>
            <div className='flex w-full my-1 items-end'>
                <InputText className='w-1/2 mx-1' label={label} value={key || ''} onChange={(e) => setKey(e.target.value)} placeholder="title" />
                <InputText className='w-1/2 mx-1' value={value || ''} onChange={(e) => setValue(e.target.value)} placeholder="content" />
                <IoIosAddCircleOutline className='text-darSecondary text-2xl cursor-pointer mb-3' onClick={() => handleOnAdd(uniqid())} />
            </div>

            {arrayValue.length > 0 &&
                arrayValue.map((item: arrayValueTypes, index: number) =>
                    <div className='flex w-full items-end' key={index}>
                        <InputText className='w-1/2 mx-1' value={item.key.toString()} onChange={(e) => { }} disabled={true} />
                        <InputText className='w-1/2 mx-1' value={item.value.toString()} onChange={(e) => { }} disabled={true} />
                        <MdDeleteOutline className='text-darSecondary text-2xl cursor-pointer mb-3' onClick={() => handleOnDelete(item.id)} />
                    </div>
                )
            }
        </>
    )
}
