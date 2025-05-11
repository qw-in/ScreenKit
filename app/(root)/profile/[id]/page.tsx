import Header from "@/components/Header";
import React from "react";

async function Page({ params }: ParamsWithSearch) {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="harshitaditya27@gmail.com"
        title="Harshit Aditya"
        userImg="/assets/images/dummy.jpg"
      />
      <h1 className="text-2xl font-karla">PROFILE ID : {id}</h1>
    </div>
  );
}

export default Page;
