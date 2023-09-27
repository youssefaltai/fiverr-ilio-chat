import Input from "~/components/Input/Input";
import { formState } from "../../Edit";
import AutoComplete from "../autoComplete/AutoComplete";
import { InputStyle } from "~/components/Input/Input.styled";
import { useRef, useState } from "react";

type settings = {
  formInitialState: formState;
  handleChange: (e: React.ChangeEvent) => void;
  titleRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  handleTextAreaChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    ref: React.MutableRefObject<HTMLTextAreaElement | null>
  ) => void;
  disableLable: boolean;
};

const Settings: React.FC<settings> = ({
  formInitialState,
  handleChange,
  titleRef,
  handleTextAreaChange,
  disableLable,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<Blob | MediaSource>();

  const handleImageClick = () => {
    inputRef.current?.click();
  };
  const handleImageChange = (event: any) => {
    const file = event.target?.files[0];
    console.log(file);
    setImage(file);

  };
  return (
    <div>
      <section>
        <div>
          <input
            type="file" 
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div className="profilePic" onClick={handleImageClick}>
          {image ? (
            <img src={URL.createObjectURL(image)} />
          ) : (
            <img src="/poodle4.jpg" alt="profile" />
          )}

          <button style={{cursor:'pointer'}}>
            {" "}
            <p>Upload Image</p>
          </button>
        </div>
        <div className="profileDetails">
          <p className="profileHead">Profile Detail</p>

          <section className="input">
            <div>
              {" "}
              <Input
                label="Username"
                value={formInitialState.username}
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <Input
                label="Email"
                value={formInitialState.email}
                name="email"
                onChange={handleChange}
              />


            </div>
            <div>
              <AutoComplete
                name="location"
                value={formInitialState.location}
                placeholder="Location"
                sugguestion={[
                  { id: 1, value: "Toronto" },
                  { id: 2, value: "Vancouver" },
                  { id: 3, value: "Montreal" },
                  { id: 4, value: "Victoria" },
                  { id: 5, value: "Ottawa" },
                  { id: 6, value: "Banff" },
                  { id: 7, value: "Calgary" },
                ]}
                onChange={handleChange}
              />
            </div>
            <div className="describe">
              <InputStyle>
                <div className="inputLabelInput">
                  <textarea
                    rows={1}
                    value={formInitialState.description}
                    name="description"
                    placeholder="Description"
                    ref={titleRef}
                    onChange={(e) => handleTextAreaChange(e, titleRef)}
                    
                  />
                  {disableLable && (
                    <label htmlFor="textarea" className="label">
                      Description
                    </label>
                  )}
                </div>
              </InputStyle>
            </div>  
                       
            
          </section>
        </div>
      </section>
    </div>
  );
};

export default Settings;
