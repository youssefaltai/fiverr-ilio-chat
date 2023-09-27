import React, { useEffect, useState } from "react";
import Modal from "~/components/Modal";
import NewPostContent from "./NewPostContent";
import PaymentPage from "./PaymentPage";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { RootState } from "~/features";
import { addPost, newForm, random, submitForm } from "~/features/newpost.slice";
//import { toast } from "react-toastify";
interface NewPostProps {
  close: () => void;
  className?: string;
  style?: React.CSSProperties;
  edit: newForm;
  index:number ;
}

export type ImageProps = {
  src: string;
  id: string;
};
export type PostStateTypes = {
  breed: string;
  registry: string;
  gender: string;
  age: string;
  price: string;
  ageType: string;
  description: string;
  title: string;
  uploadedImages: ImageProps[];
};
const NewPost: React.FC<NewPostProps> = ({
  close,
  className = "",
  style = {},
  edit,
  index 
}) => {
  const [paymentPage, setPaymentPage] = useState(false);

  const [post, setPost] = useState<newForm>({
    breed: edit.breed,
    registry: edit.registry,
    gender: edit.gender,
    age: edit.age,
    price: edit.price,
    ageType: edit.ageType,
    description: edit.description,
    title: edit.title,
    id: edit.id,
    uploadedImages: [...edit.uploadedImages],
  });

  const handleGenderChange = (value: string) => {
    handlechange1("gender", value);
    setPost((prev) => {
      return { ...prev, gender: value };
    });
  };


  const handleAgeTypeChange = (value: string) => {
    handlechange1("ageType", value);
    setPost((prev) => {
      return { ...prev, ageType: value };
    });
  };
  const handleChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    
    if (name === "breed"){
      handlechange1("breed" , value)
    }
    if (name === "age") {
      handlechange1("age", value);
    }
    if (name === "price") {
      handlechange1("price", value);
    }

    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleRegistryChange = (value: string) => {
    handlechange1("registry", value);
    setPost((prev) => {
      return { ...prev, registry: value };
    });
  };

  const pushImage = (base64String: string) => {
    const uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    setPost((prev) => {
      const { uploadedImages } = prev;
      const isUIDexists = uploadedImages.find((el) => el.id === uid);
      if (isUIDexists) return { ...prev };
      uploadedImages.push({ id: uid, src: base64String });
    //  console.log(uploadedImages);
      handlechange1("uploadedImages",[...uploadedImages]);
      return { ...prev, uploadedImages: [...uploadedImages] };
    });
  };

  const removeUploadedImage = (id: string) => {
    setPost((prev) => {
      const { uploadedImages } = prev;
      const removedImages = uploadedImages.filter((el) => el.id !== id);
      //  dispatch(removeImage(id))
      // console.log(uploadedImages)
      return { ...prev, uploadedImages: [...removedImages] };
    });
  };

  const togglePaymentPage = () => {
    setPaymentPage((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const { breed, gender, submittedForm } = useAppSelector(
    (state: RootState) => state.newPost
  );

  const handlechange1 = (name: keyof PostStateTypes, value: any) => {
    dispatch(addPost({ name, value }));
  };

  console.log(submittedForm ? submittedForm[0] : "");
  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(random());
    dispatch(submitForm());
    setPost({
      breed: "",
      registry: "",
      gender: "",
      age: "",
      price: "",
      ageType: "",
      description: "",
      title: "",
      id:'',
      uploadedImages: [],
    });

    //toast.success("Payment Confirmed✅! Procced to listing");
  };

  



  useEffect(()=>{
    setPost({
      id: edit.id,
      breed: edit.breed,
      registry: edit.registry,
      gender: edit.gender,
      age: edit.age,
      price: edit.price,
      ageType: edit.ageType,
      description: edit.description,
      title: edit.title,
      uploadedImages: [...edit.uploadedImages],
    })
  }, [submittedForm])

  return (
    
      <Modal
        close={close}
        title={paymentPage ? "Back" : "Edit Post"}
        className={className}
        style={style}
      >
        {paymentPage ? (
          <PaymentPage handleSubmit={handleSubmit} close={close} />
        ) : (
          <NewPostContent
            post={post}
            breed={breed}
            gender={gender}
            handleChangeAll={handleChange}
            handleChange={(e) => handlechange1("breed", e.target.value)}
            handleGenderChange={handleGenderChange}
            //handleGenderChange={handleGenderChange}
            handleAgeTypeChange={handleAgeTypeChange}
            handleRegistryChange={handleRegistryChange}
            removeUploadedImage={removeUploadedImage}
            pushImage={pushImage}
            togglePaymentPage={togglePaymentPage}
            handleSubmit={handleSubmit}
            index={index}
            close={close}
          />
        )}
      </Modal>
  );
};

export default NewPost;
