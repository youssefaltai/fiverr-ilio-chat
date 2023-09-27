import { useEffect, useState } from "react";
import { RootState } from "~/features";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { ListingStyle } from "./ListingStyle.styled";
import Header from "../Help/component/Header";
import {
  cancelDelete,
  confirmDelete,
  deleteForm,
  newForm,
} from "~/features/newpost.slice";
import { useNavigate } from "react-router-dom";
import { ModalStateType } from "../HomePage/HomePage";
import NewPost, { ImageProps } from "./Edit Post/NewPost/NewPost";

const Listing = () => {
  const { submittedForm, pendingDelete } = useAppSelector(
    (state: RootState) => state.newPost
  );
  const list = submittedForm;
  const [days, setDays] = useState<number>(30);
  const [activeModal, setActiveModal] = useState<ModalStateType>(null);

  //console.log(list);

  const windowDimensions = useAppSelector((state) => state.dimensions);

  useEffect(() => {
    if (activeModal && windowDimensions.width >= 743)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [activeModal, windowDimensions.width]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDays((prevNumber) => prevNumber - 1);
      if (days === 0) dispatch(confirmDelete());
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate();

  const [editState, setEditState] = useState<newForm>({
    breed: "",
    registry: "",
    gender: "",
    age: "",
    price: "",
    ageType: "",
    description: "",
    title: "",
    id: "",
    uploadedImages: [] as ImageProps[],
  });

  const [index, setIndex] = useState<number>(0);

  //console.log(index);
  /// Edit Post

  if (activeModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }


  const dispatch = useAppDispatch();
  const [deleteTimeOutId, setDeleteTimeOutId] = useState<any>();
  const handleDeleteForm = (formId: string) => {
    dispatch(deleteForm(formId));

    const deleteTimeout = setTimeout(() => {
      dispatch(confirmDelete());
    }, 5000);

    setDeleteTimeOutId(deleteTimeout);
  };

  const handleUndoDelete = () => {
    dispatch(cancelDelete());
    clearTimeout(deleteTimeOutId);
  };

  //  console.log(pendingDelete);

  return (
    <>
      <ListingStyle>
        <Header phoneHeader="Listings" />

        <div className="flexContainer">
          <div className="tab1">
            <div className="listing">
              <img src="icons/listings.svg" alt="list" />
              <p> Listings</p>
            </div>
          </div>
          <div className="tab2">
            <div className="line"></div>
            {list && (
              <div className="listWrapper">
                {list?.map((listing: newForm, index) => (
                  <div key={listing.id}>
                    {pendingDelete != listing.id && (
                      <div className="uploadContainer">
                        <div className="infoHead">

                          <div className="imageStyling">
                            {" "}
                            {listing.uploadedImages[0] && (
                              <img
                                src={listing.uploadedImages[0]?.src}
                                alt="image"
                              />
                            )}
                          </div>
                          <div className="info">
                            <p>{listing.title}</p>
                            <div>
                              {listing.price && <p>${listing.price} </p>}
                            </div>
                          </div>
                        </div>
                        <div className="options">
                          <div
                            className="firstOption"
                            onClick={() => navigate("/listing")}
                          >
                            {" "}
                            View
                          </div>
                          <div
                            onClick={() =>
                              setEditState({
                                breed: listing.breed,
                                registry: listing.registry,
                                gender: listing.gender,
                                age: listing.age,
                                price: listing.price,
                                ageType: listing.ageType,
                                description: listing.description,
                                title: listing.title,
                                uploadedImages: listing.uploadedImages,
                                id: listing.id,
                              })
                            }
                          >
                            <div onClick={() => setIndex(index)}>
                              <div
                                className="secondOption"
                                onClick={() => setActiveModal("post")}
                              >
                                {" "}
                                Edit
                              </div>
                            </div>
                          </div>
                          <div
                            className="thirdOption"
                            onClick={() => handleDeleteForm(listing.id)}
                          >
                            <img src="/icons/trash.svg" alt="trash" />{" "}
                          </div>
                        </div>
                        <div className="views">
                          <div className="eye">
                            <img src="/icons/eye-2.svg" alt="eye" />
                            <p>{listing.id} </p>
                          </div>
                          <p> {days}</p>
                        </div>
                      </div>
                    )}
                    {pendingDelete === listing.id && (
                      <div
                        className="delete"
                        onClick={() => handleUndoDelete()}
                      >
                        {" "}
                        <p>Deleted</p>{" "}
                        <p className="del" onClick={() => handleUndoDelete()}> Undo</p>{" "}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {activeModal && <div className="over"> </div>}
        {activeModal === "post" && (
          <div className="modalWrapper2">
            <NewPost
              index={index}
              edit={editState}
              close={() => setActiveModal(null)}
            />
          </div>
        )}
      </ListingStyle>
    </>
  );
};

export default Listing;
