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

      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user.image ?? ""}
              username={user.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
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
    </div>
  );
}

export default Page;
