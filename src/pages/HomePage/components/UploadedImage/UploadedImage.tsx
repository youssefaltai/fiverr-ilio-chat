//import classes from "./UploadedImage.module.css";

import { UploadStyle } from "./UploadStyle.style";

const UploadedImage: React.FC<{
  src: string;
  id: string;
  removeUploadedImage: (id: string) => void;
}> = ({ src, id, removeUploadedImage }) => {
  return (
    <UploadStyle>
      <div className="uploadedImage1">
        <img src={src} alt="uploaded" />  
        <svg
          className="removeIcon1"
          onClick={() => removeUploadedImage(id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z"
            fill="#292F3F"
          />
          <path
            d="M15.7125 14.2925C16.1025 14.6825 16.1025 15.3224 15.7125 15.7124C15.5125 15.9024 15.2625 16.0025 15.0025 16.0025C14.7425 16.0025 14.4925 15.9024 14.2925 15.7124L12.0025 13.4224L9.71254 15.7124C9.51254 15.9024 9.26252 16.0025 9.00252 16.0025C8.74252 16.0025 8.4925 15.9024 8.2925 15.7124C7.9025 15.3224 7.9025 14.6825 8.2925 14.2925L10.5825 12.0025L8.2925 9.71242C7.9025 9.32242 7.9025 8.6825 8.2925 8.2925C8.6825 7.9025 9.32254 7.9025 9.71254 8.2925L12.0025 10.5825L14.2925 8.2925C14.6825 7.9025 15.3225 7.9025 15.7125 8.2925C16.1025 8.6825 16.1025 9.32242 15.7125 9.71242L13.4225 12.0025L15.7125 14.2925Z"
            fill="white"
          />
        </svg>
      </div>
    </UploadStyle>
  );
};

export default UploadedImage;
