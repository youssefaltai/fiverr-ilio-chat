import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "~/features/hooks";
import Navbar from "~/components/Navbar";
import GalleryGrid from "./components/GalleryGrid";
//import classes from "./ListingDetails.module.css";
import GalleryHeader from "./components/GalleryHeader";
import Description from "~/components/Description";
import ProfileLogo from "~/components/ProfileLogo";
import Details from "./components/Details";
import CoverImage from "./components/CoverImage";
import Report from "~/pages/ListingDetails/ListingReport/Report";
import { ListingDetailsStyle } from "./ListingDetailsStyle.styled";

const ListingDetails = () => {
  const [text, setText] = useState("");
  const [isReportOpen, setReportOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    // After updating the text state, adjust the height of the textarea
    adjustTextareaHeight();
  };

  // add height in text area on typing
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight - 22}` + "px";
      console.log(textarea.scrollHeight);
    }
  };

  const toggleReport = () => {
    setReportOpen((prev) => !prev);
  };

  const dimensions = useAppSelector((state) => state.dimensions);

  // prevent scroll on report modal open
  useEffect(() => {
    if (isReportOpen && dimensions.width >= 743)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isReportOpen, dimensions.width]);

  // if report modal is open and in mobile view, render only report
  if (dimensions.width < 743 && isReportOpen)
    return (
      <Report
        image="/images/img13.jpg"
        title="exotic red poodle form the US"
        price={2000}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
        close={toggleReport}
      />
    );

  return (
    <>
      <CoverImage images={coverImages} toggleReport={toggleReport} />
      <ListingDetailsStyle>
      <div className='main'>
        <div className='navDiv'>
          <Navbar title="Listings" />
        </div>
        <div className='mainContainer'>
          <GalleryHeader openReport={toggleReport} />
          <GalleryGrid />
          <div className='content'>
            <div className='descriptionAndDetails'>
              <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Purus in mollis nunc sed. Aliquet nec ullamcorper sit amet risus. In est ante in nibh. Purus semper eget duis at. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Cursus eget nunc scelerisque viverra mauris. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Fames ac turpis egestas integer. Id venenatis a condimentum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nulla aliquet enim tortor at auctor. Dui vivamus arcu felis bibendum ut tristique et egestas quis." />
              <Details />
            </div>
            <div className='profileLogoWrapper'>
              <ProfileLogo
                className='profileLogo'
                location="toronto, On"
              />
              <div className='inputDiv'>
                <textarea
                  ref={textareaRef}
                  onChange={handleChange}
                  value={text}
                  rows={1}
                  placeholder="Send a message..."
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.4393 2.56042C16.8534 1.97458 16.0242 1.74463 15.2201 1.9463L4.29259 4.67793C2.83592 5.0421 1.86426 6.29546 1.87509 7.79713C1.88592 9.2988 2.87426 10.5379 4.33593 10.8821L8.20759 11.7929L9.11844 15.6646C9.4626 17.1262 10.7017 18.1146 12.2034 18.1254C12.2117 18.1254 12.2192 18.1254 12.2276 18.1254C13.7184 18.1254 14.9601 17.1562 15.3226 15.7079L18.0542 4.78047C18.2551 3.97547 18.0251 3.14625 17.4393 2.56042ZM16.8409 4.47539L14.1093 15.4029C13.8351 16.4963 12.9126 16.8621 12.2118 16.8746C11.5076 16.8696 10.5934 16.4746 10.3351 15.3771L9.41507 11.4687L12.9418 7.94209C13.1859 7.69792 13.1859 7.30206 12.9418 7.05789C12.6976 6.81373 12.3018 6.81373 12.0576 7.05789L8.53092 10.5846L4.62259 9.6646C3.52509 9.40627 3.13009 8.49204 3.12509 7.78787C3.12009 7.08287 3.50258 6.16372 4.59675 5.89039L15.5234 3.15876C15.6126 3.13626 15.7026 3.1254 15.7909 3.1254C16.0742 3.1254 16.3476 3.23713 16.5551 3.4438C16.8276 3.7163 16.9342 4.10206 16.8409 4.47539Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ListingDetailsStyle>
      {isReportOpen && (
        <div className={"modalWrapper"}>
          <Report
            image="/images/img13.jpg"
            title="exotic red poodle form the US"
            price={2000}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
            close={toggleReport}
          />
        </div>
      )}
    </>
  );
};

export default ListingDetails;

const coverImages = [
  "/images/img.jpg",
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
];
