import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All videos" subHeader="Public Library" />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
      {/* <VideoCard
        id="1"
        title="Screen Recorder Message"
        thumbnail="/assets/samples/thumbnail (1).png"
        createdAt={new Date("2023-10-01 06:00:00")}
        duration={146}
        userImg="/assets/images/jason.png"
        username="Jason"
        views={10}
        visibility="public"
      /> */}
    </main>
  );
};

export default Page;
