//import classes from "./Profile.module.css";
import Seller from "~/components/Seller/Seller";
//import Carousel from "../../components/Carousel";
import Description from "../../components/Description";
import Navbar from "../../components/Navbar";
//import ProfileLogo from "../../components/ProfileLogo";
import { ProfileStyling } from "./ProfileStyle.styled";
import Display from "~/components/Display/Display";
import { useAppSelector } from "~/features/hooks";
import { useEffect } from "react";

const Profile = () => {
  const windowDimensions = useAppSelector((state) => state.dimensions);

  useEffect(() => {
    if (windowDimensions) {
      document.body.style.overflow = "unset";
    }
  }, [windowDimensions.width]);

  return (
    <>
      <ProfileStyling>
        <div className="main">
          <Navbar title="Profile" />
          {/* <ProfileLogo title="blueberrypoodle" /> */}
          <Display />
          <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Purus in mollis nunc sed. Aliquet nec ullamcorper sit amet risus. In est ante in nibh. Purus semper eget duis at. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Cursus eget nunc scelerisque viverra mauris. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Fames ac turpis egestas integer. Id venenatis a condimentum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nulla aliquet enim tortor at auctor. Dui vivamus arcu felis bibendum ut tristique et egestas quis." />
          {/* <Carousel title="Seller Listings" /> */}
        </div>
      </ProfileStyling>
      <Seller />
    </>
  );
};
export default Profile;
