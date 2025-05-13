import EmptyComponent from "@/components/EmptyComponent";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";
import { getAllVideosByUser } from "@/lib/actions/video";
import { redirect } from "next/navigation";
import React from "react";

async function Page({ params, searchParams }: ParamsWithSearch) {
  const { id } = await params;
  const { query, filter } = await searchParams;
  const { user, videos } = await getAllVideosByUser(id, query, filter);

  if (!user) redirect("/404");

  return (
    <div className="wrapper page">
      <Header
        subHeader={user?.email}
        title={user?.name}
        userImg={user?.image ?? ""}
      />

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
          title="No videos available yet"
          description="Videos will show up once you upload them."
        />
      )}

      {/* <h1 className="text-2xl font-karla">PROFILE ID : {id}</h1> */}
    </div>
  );
}

export default Page;
