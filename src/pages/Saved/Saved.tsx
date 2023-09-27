import { useEffect, useState } from "react";
import { RootState } from "~/features";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { SavedStyle } from "./SavedStyle.styled";
import { CardProps } from "~/components/Card";
import Header from "../Help/component/Header";
import { useNavigate } from "react-router-dom";
import {
  cancelDelete,
  cardSave,
  confirmDelete,
  deleteForm,
} from "~/features/save.slice";

const Saved = () => {
  const { saved } = useAppSelector((state: RootState) => state.saved);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formIdentification, setFormIdentification] = useState<number | null>(
    null
  );
  const [deleteTimeOutId, setDeleteTimeOutId] = useState<any>();
  const { pendingDelete } = useAppSelector((state: RootState) => state.saved);
  const handleDeleteForm = (formId: string) => {
    dispatch(deleteForm(formId));
    dispatch(cardSave({ index: parseInt(formId), active: true }));
    setFormIdentification(parseInt(formId));
    const deleteTimeout = setTimeout(() => {
      dispatch(confirmDelete());
    }, 5000);

    setDeleteTimeOutId(deleteTimeout);
  };

  const handleUndoDelete = () => {
    dispatch(cancelDelete());
    if (typeof formIdentification === "number") {
      dispatch(cardSave({ index: formIdentification, active: false }));
    }
    clearTimeout(deleteTimeOutId);
  };

  useEffect(() => {
    document.body.style.overflow = "unset";
  }, []);

  return (
    <SavedStyle>
      <Header phoneHeader="Saved" />
      <div className="flexContainer">
        <div className="tab1">
          <div className="options">
            <img src="/icons/saved.svg" alt="saved" />
            <p> Saved</p>
          </div>
        </div>
        <div className="tab2">
          <div className="line"></div>
          <div className="wrapper">
            {saved.map((saved: CardProps) => (
              <div className="spa" key={saved.inde}>
                {pendingDelete != saved.inde && (
                  <div className="infoHead">
                    <div className="imageFlex">
                      <img src={saved.bg} alt="image" />
                      <div className="titleInfo">
                        <p>{saved.title}</p>
                        <p>${saved.price}</p>
                      </div>
                    </div>
                    <div className="viewTrash">
                      <div
                        className="view"
                        onClick={() => navigate("/listing")}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        View
                      </div>
                      <div
                        className="trash"
                        onClick={() => handleDeleteForm(saved.inde.toString())}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="/icons/trash.svg" />
                      </div>
                    </div>
                  </div>
                )}

                {pendingDelete === saved.inde && (
                  <div className="delete" onClick={() => handleUndoDelete()}>
                    {" "}
                    <p>Deleted</p>{" "}
                    <p className="del" onClick={() => handleUndoDelete()}>
                      {" "}
                      Undo
                    </p>{" "}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SavedStyle>
  );
};

export default Saved;
