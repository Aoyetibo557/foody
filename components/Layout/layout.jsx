import React, { useState, useEffect } from "react";
import { Header } from "./_header/header"
import { Footer } from "./_footer/footer"

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

PageLayout.getLayout = function getLayout(page) {
    return <PageLayout>{page}</PageLayout>;
}

export default PageLayout;