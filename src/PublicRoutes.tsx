import { Route, Routes } from "react-router-dom";

import GalleryCarouesl from "./pages/ListingDetails/components/GalleryCarouesl";
import ListingDetails from "./pages/ListingDetails/ListingDetails";
import Profile from "./pages/Profile/Profile";
import HomePage from "./pages/HomePage/HomePage";
import Edit from "./pages/Edit/Edit";
import Help from "./pages/Help/Help";
import Listing from "./pages/Listing/Listing";
import Saved from "./pages/Saved/Saved";
import { lazy, Suspense } from "react";
// import Messages from "./pages/Messages/Messages";

const Messages = lazy(() => import("./pages/Messages/Messages"));

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        {/* homepage */}
        <Route path="/" element={<HomePage />} />

        {/* profiles page */}
        <Route path="/profile" element={<Profile />} />

        {/* listig page */}
        <Route path="/listing" element={<ListingDetails />} />
        <Route path="/listing/gallery" element={<GalleryCarouesl />} />

        {/* Edit and Help  */}
        <Route path="/edit" element={<Edit />} />
        <Route path="/help" element={<Help />} />

        {/* Listing  */}
        <Route path="/menuListing" element={<Listing />} />

        {/* Saved */}
        <Route path="/menuSaved" element={<Saved />} />

        {/* Messages */}
        <Route path="/messages" element={
          <Suspense fallback={<></>}>
            <Messages />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default PublicRoutes;
