import { Dispatch, LegacyRef, RefObject, SetStateAction } from "react";
import { FiEdit } from "react-icons/fi";

interface FileInputTypes {
    fileRef: any,
    // setSelectedImage: (image: Buffer | null) => void;
    setSelectedImage: (image: string | null | ArrayBuffer) => void;
    className?: string,
}

export function FileInput({fileRef, setSelectedImage = () => {}, className = ""}: FileInputTypes) {

    const handleFileInput = (e: any) => {
        e.preventDefault();
        
        const image = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = function () {
          console.log(reader.result);
          setSelectedImage(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
          setSelectedImage(null);
        };
        // if (image.size > 5242880) {
        //     // display.func("Please select image size less than 5 MB");
        //     // notify.e(e, "Please select image size less than 5 MB")
        //     return;
        // }
        // if (image.height > 500 || image.width > 500) {
        //     // display.func("The image size is too long");
        //     // notify.e(e, "The image size is too long")
        //     return;
        // }
        // if (image) {
        //     setSelectedImage(image);
        // } else {
        //     setSelectedImage(undefined);
        // }
    }

  return (
    <div className={`relative`}>
        <FiEdit style={{width: '100%', height: '100%'}} className={`text-darkSecondary bg-nebula p-1 rounded-md border-2 border-buttonDark`} />
        <input
            ref={fileRef}
            className={`absolute cursor-pointer top-0 opacity-0 ${className}`}
            accept=".png, .jpg, .jpeg"
            type="file"
            style={{width: '100%', height: '100%', fontSize: '0px'}}
            onChange={(e) => handleFileInput(e)}
        />
    </div>
  )
}