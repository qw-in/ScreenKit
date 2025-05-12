import EmptyComponent from "@/components/EmptyComponent";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import { getAllVideos } from "@/lib/actions/video";
import React from "react";

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );

  return (
    <main className="wrapper page">
      <Header title="All videos" subHeader="Public Library" />
      {/* <section className="video-grid"> */}
      {/* {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))} */}
      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              thumbnail={video.thumbnailUrl}
              userImg={user?.image || ""}
              username={user?.name || ""}
            />
          ))}
        </section>
      ) : (
        <EmptyComponent
          icon="/assets/icons/video.svg"
          title="No videos found"
          description="Looks like you haven't recorded any videos yet."
        />
      )}
      {/* </section> */}
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
