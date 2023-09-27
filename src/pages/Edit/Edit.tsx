import { useState, useRef, useEffect } from "react";
import { EditStyle } from "./EditStyle.styled";
import UpdateSVG from "./components/UpdateSVG";
import SettingsSVG from "./components/SettingsSVG";
import DeleteSVG from "./components/DeleteSVG";
import { useAppSelector } from "~/features/hooks";

// import UpdateSVGPhone from "./components/UpdateSVGPhone";
// import SettingsSVGPhone from "./components/SettingsSVGPhone";
// import DeleteSVGPhone from "./components/phone/DeleteSVGPhone";

//import Input from "~/components/Input/Input";
//import AutoComplete from "./components/autoComplete/AutoComplete";
//import { InputStyle } from "~/components/Input/Input.styled";
import Settings from "./components/settings/Settings";
import UpdatePassword from "./components/update/UpdatePassword";
import Delete from "./components/delete/Delete";
import Phone from "./components/phone/Phone";
import { useNavigate } from "react-router-dom";

export type formState = {
  username?: string;
  email?: string;
  location: string;
  description?: string;
  currentPassword?: string;
  confirmPassword?: string;
  newPassword?: string;
  deleteAccount?: string;
};
const Edit: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [formInitialState, setFormInitialState] = useState<formState>({
    username: "",
    email: "",
    location: "",
    description: "",
    currentPassword: "",
    confirmPassword: "",
    newPassword: "",
    deleteAccount: "",
  });
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    ref: React.MutableRefObject<HTMLTextAreaElement | null>
  ) => {
    handleChange(event);
    // After updating the text state, adjust the height of the textarea
    adjustTextareaHeight(ref);
    const { value } = event.target;
    if (value.length >= 1) {
      enableLabel(true);
    } else {
      enableLabel(false); 
    }
  };
  const [disableLable, enableLabel] = useState<boolean>(false);

  const adjustTextareaHeight = (
    ref: React.MutableRefObject<HTMLTextAreaElement | null>
  ) => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight - 28}` + "px";
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    //e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;

    setFormInitialState((prev) => {
      return {
        ...prev,
        [name]: [value],
      };
    });
  };
  const navigate = useNavigate();

  const windowDimensions = useAppSelector((state) => state.dimensions);
  //  console.log(windowDimensions)
  useEffect(() => {
    if (windowDimensions) {
      document.body.style.overflow = "unset";
    }
  }, [windowDimensions.width]);

  // const  {breed} = useAppSelector((state:RootState)=> state.newPost)

  //  console.log(breed)
  return (
    <>
      <EditStyle>
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/Frame 87.png" alt="logo" />
        </div>
        <div className="editHeader" onClick={() => navigate(-1)}>
          <img src="/icons/back.svg" alt="back" />
          <p> Edit Profile</p>
        </div>
        <div className="container">
          <div className="flexContainer">
            <div className="tab1">
              <section className="options">
                <div
                  className={active === 0 ? "listColor" : "list"}
                  onClick={() => setActive(0)}
                >
                  <SettingsSVG active={active} />
                  <p> Settings</p>
                </div>
                <div
                  className={active === 1 ? "listColor" : "list"}
                  onClick={() => setActive(1)}
                >
                  <UpdateSVG active={active} />
                  <p> Update password</p>
                </div>
                <div
                  className={active === 2 ? "listColor" : "list"}
                  onClick={() => setActive(2)}
                >
                  <DeleteSVG active={active} />
                  <p> Delete Account</p>
                </div>
              </section>
              {/* // Phone view */}
              <Phone active={active} setActive={setActive} />
              {/* ////// */}
              <section>
                <div className="line"></div>
              </section>
            </div>
            <div className="tab2">
              {active === 0 && (
                <Settings
                  formInitialState={formInitialState}
                  handleChange={handleChange}
                  titleRef={titleRef}
                  handleTextAreaChange={handleTextAreaChange}
                  disableLable={disableLable}
                />
              )}

              {active === 1 && (
                <UpdatePassword
                  handleChange={handleChange}
                  formInitialState={formInitialState}
                />
              )}

              {active === 2 && (
                <Delete
                  handleChange={handleChange}
                  formInitialState={formInitialState}
                />
              )}

              <div className="save">
                <button type="submit">Save</button>
              </div>
            </div>
          </div>
        </div>
      </EditStyle>
    </>
  );
};

export default Edit;
