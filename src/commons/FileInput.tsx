import { FiEdit } from "react-icons/fi";

interface FileInputTypes {
  fileRef: any,
  setSelectedImage: (image: string | null | ArrayBuffer) => void;
  className?: string,
  setImageData: (data: any) => void;
}

export function FileInput({ fileRef, setSelectedImage = () => { }, setImageData = () => { }, className = "" }: FileInputTypes) {

  const handleFileInput = (e: any) => {
    e.preventDefault();

    const image = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function () {
      setSelectedImage(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
      setSelectedImage(null);
    };
    if (image) {
      setImageData(image);
    } else {
      setImageData(undefined);
    }
  }

  return (
    <div className={`relative`}>
      <FiEdit style={{ width: '100%', height: '100%' }} className={`text-darkSecondary text-xl bg-nebula p-1 rounded-md border-2 border-soft`} />
      <input
        ref={fileRef}
        className={`absolute cursor-pointer top-0 opacity-0 ${className}`}
        accept=".png, .jpg, .jpeg"
        type="file"
        style={{ width: '100%', height: '100%', fontSize: '0px' }}
        onChange={(e) => handleFileInput(e)}
      />
    </div>
  )
}