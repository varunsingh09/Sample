import React, { useContext, useState } from "react";

import Header from "./../pages/common/header";
// import FollowUs from "./FollowUs";
// import Footer from "./Footer";
// import FooterTerms from "./FooterTerms";
import menuItems from "./../pages/common/Menu/menuItems";
import { isMobile } from "react-device-detect";
// import { AuthContext } from "../../global/AuthProvider";

const MainAdminLayout = ({ children }) => {
    //const [state] = useContext(AuthContext);

return (
    <>
        <Header isMobile={isMobile} menuItems={menuItems} isLogin={'Active'} />
        {children}
        {!isMobile && (
            <>
                {/* <FollowUs />
          <Footer /> */}
            </>
        )}
        {/* <FooterTerms isMobile={isMobile} /> */}
    </>
);
};

export default MainAdminLayout;
