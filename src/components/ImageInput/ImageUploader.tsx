// ImageUploader.tsx
import React, { useRef } from "react";
import { ImageUp } from "./ImageUploader.styled";

interface ImageUploaderProps {
  uploadImage: (base64String: string) => void;  
  hideTitle?: boolean;
  style?: React.CSSProperties;
}
const ImageUploader: React.FC<ImageUploaderProps> = ({
  uploadImage,
  hideTitle,
  style = {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        imageRef.current?.setAttribute("src", base64String);
        uploadImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ImageUp>
    <div
      style={style}
      className='imageUploader'
      onClick={() => inputRef.current?.click()}
    >
      <div className='items'>
        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 2.25H9C5.278 2.25 2.25 5.278 2.25 9V15C2.25 18.722 5.278 21.75 9 21.75H15C18.722 21.75 21.75 18.722 21.75 15V9C21.75 5.278 18.722 2.25 15 2.25ZM20.25 15C20.25 17.895 17.895 20.25 15 20.25H9C6.105 20.25 3.75 17.895 3.75 15V9C3.75 6.105 6.105 3.75 9 3.75H15C17.895 3.75 20.25 6.105 20.25 9V15ZM16.75 12C16.75 12.414 16.414 12.75 16 12.75H12.75V16C12.75 16.414 12.414 16.75 12 16.75C11.586 16.75 11.25 16.414 11.25 16V12.75H8C7.586 12.75 7.25 12.414 7.25 12C7.25 11.586 7.586 11.25 8 11.25H11.25V8C11.25 7.586 11.586 7.25 12 7.25C12.414 7.25 12.75 7.586 12.75 8V11.25H16C16.414 11.25 16.75 11.586 16.75 12Z"
            fill="#292F3F"
          />
        </svg>
        {!hideTitle && <span>Click to upload</span>}
      </div>
    </div>
    </ImageUp>
  );
};

export default ImageUploader;
