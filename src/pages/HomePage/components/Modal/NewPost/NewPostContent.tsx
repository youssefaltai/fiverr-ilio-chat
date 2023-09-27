//import classes from "./NewPost.module.css";
import { FilterItem } from "../Filter/Filter";
import { useRef } from "react";

import RadioButton from "~/components/RadioButton";
import Input from "~/components/Input/Input";
import DarkButton from "~/components/DarkButton/DarkButton";
import ImageUploader from "~/components/ImageInput/ImageUploader";
import UploadedImage from "../../UploadedImage/UploadedImage";
import { PostStateTypes } from "./NewPost";
import { NewPostStyle } from "./NewPostStyle.styled";
import { registryOptions } from "~/constants";
import AutocompleteInput from "~/components/AutoCompleteInput/AutoCompleteInput";
import { useAppDispatch } from "~/features/hooks";
//import { RootState } from "~/features";
import { addPost } from "~/features/newpost.slice";

interface NewPostContentProps {
  post: PostStateTypes;
//  handleChange: (e: React.ChangeEvent) => void;
handleChangeAll: (e: React.ChangeEvent) => void;
  handleChange:(e:any) => void  
 handleGenderChange: (value: string) => void;
  //handleGenderChange: (e:any) =>void; 
 handleAgeTypeChange: (value: string) => void;
  handleRegistryChange: (value: string) => void;
  removeUploadedImage: (id: string) => void;
  pushImage: (base64String: string) => void;
  togglePaymentPage: () => void;
  handleSubmit:(event: any) => void
  breed:string;
  gender:string |boolean;
}
const NewPostContent: React.FC<NewPostContentProps> = ({
  
  post,
  handleChangeAll,
  //handleChange,
  handleGenderChange,
  handleAgeTypeChange,
  handleRegistryChange,
  removeUploadedImage,
  pushImage,
  togglePaymentPage,
  handleSubmit,
  
}) => {
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    ref: React.MutableRefObject<HTMLTextAreaElement | null>
  ) => {
    handleChangeAll(event);
    adjustTextareaHeight(ref);
 if(titleRef){
  handlechangeToTextAreaTitle('title',event.target.value)
 }  
  };

  
  const handleTextAreaChangeDes = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    ref: React.MutableRefObject<HTMLTextAreaElement | null>
  ) => {
    handleChangeAll(event);
    // After updating the text state, adjust the height of the textarea
    adjustTextareaHeight(ref);

  if (descRef){
    handlechangeToTextAreaDescription('description', event.target.value)
 }
  
  };

  const adjustTextareaHeight = (
    ref: React.MutableRefObject<HTMLTextAreaElement | null>
  ) => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight - 28}` + "px";
    }
  };

  const handlechangeToTextAreaTitle = (name: keyof PostStateTypes, value: any) => {
    dispatch(addPost({ name, value }));
  }; 

  const handlechangeToTextAreaDescription = (name: keyof PostStateTypes, value: any) => {
    dispatch(addPost({ name, value }));
  }; 

  const dispatch = useAppDispatch();
  // const { title,description } = useAppSelector(
  //   (state: RootState) => state.newPost
  // ); 

  // console.log(title)

  // console.log(description)



  return (
    <NewPostStyle>
      <div>
        <form onSubmit={handleSubmit}   >
          <div className="content">
            <FilterItem title="Breed">
              <AutocompleteInput
              
                //value={post.breed}
                 value= {post.breed}
                onChange={handleChangeAll}
                placeholder="All Breeds"
                name="breed"
                suggestions={[
                  { id: 1, value: "Labrador Retriever" },
                  { id: 2, value: "German Shepherd" },
                  { id: 3, value: "Golden Retriever" },
                  { id: 4, value: "Bulldog" },
                  { id: 5, value: "Beagle" },
                ]}
              />
            </FilterItem>
            <FilterItem title="Gender">
              <div className="radioGroup">
                <RadioButton
                //  checked={post.gender === "m"}
                 checked={post.gender==="m"}  
                label="Male"
                  name="gender"
                  onChange={handleGenderChange}
                  value="m"
                />
                <RadioButton
                  //checked={post.gender === "f"}
                  checked ={post.gender==="f"}
                  label="Female "
                  name="female"
                 //name="gender" 
                 onChange={handleGenderChange}
                  value="f"
                />
              </div>
            </FilterItem>
            <FilterItem title="Price">
              <div className="priceInputs">
                <Input
                  label="Price"
                  onChange={handleChangeAll}
                  value={post.price}
                  name="price"
                />
              </div>
            </FilterItem>
            <FilterItem title="Age">
              <div className="age">
                <Input
                  label="Age"
                  onChange={handleChangeAll}
                  value={post.age}
                  name="age"
                  className="input"
                />
                <div className="ageTime">
                  <div className="ageM">
                    <RadioButton
                      checked={post.ageType === "weeks"}
                      label="Weeks"
                      name="weeks"
                      onChange={handleAgeTypeChange}
                      value="weeks"
                    />
                  </div>
                  <RadioButton
                    checked={post.ageType === "years"}
                    label="Years "
                    name="years"
                    onChange={handleAgeTypeChange}
                    value="years"
                  />
                </div>
              </div>
            </FilterItem>
            <FilterItem title="Registry">
              <div className="radioGroup">
                {registryOptions.map((option, index) => {
                  const label = option;
                  const name = `registryOption-${index}`;
                  const value = option.replace(/\s+/g, "_").toLowerCase();
                  return (
                    <RadioButton
                      key={name}
                      checked={post.registry === value}
                      label={label}
                      name={name}
                      onChange={handleRegistryChange}
                      value={value}
                    />
                  );
                })}
              </div>
            </FilterItem>
            <FilterItem title="Title">
            <textarea
              ref={titleRef}
              className='breedInput'
              placeholder="32 words max..."
              value={post.title}
              onChange={(e) => handleTextAreaChange(e, titleRef)}
              name="title"
              rows={1}
            />
            </FilterItem>
            <FilterItem title="Description">
            <textarea
              rows={1}
              ref={descRef}
              className='breedInput'
              placeholder="Type here..."
              value={post.description}
              onChange={(e) => handleTextAreaChangeDes(e, descRef)}
              name="description"
            />
            </FilterItem>
            <FilterItem title="Images">
              <div className={post.uploadedImages.length !== 0 ? "images" : ""}>
                {post.uploadedImages.map((el) => {
                  return (
                    <UploadedImage
                      removeUploadedImage={removeUploadedImage}
                      src={el.src}
                      key={el.id}
                      id={el.id}
                    />
                  );
                })}
                <ImageUploader
                  uploadImage={pushImage}
                  hideTitle={post.uploadedImages.length !== 0}
                  style={
                    post.uploadedImages.length !== 0 ? { height: "75px" } : {}
                  }
                />
              </div>
              <span className="imagesInfo">
                first image is your cover “hold and drag to move
              </span>
            </FilterItem>
          </div>
          <DarkButton title="Next" onClick={togglePaymentPage} />
          <div><button type="submit" onSubmit={handleSubmit}  style={{display:"none"}}> Submit </button></div>
        </form>
      </div>
    </NewPostStyle>
  );
};

export default NewPostContent;
