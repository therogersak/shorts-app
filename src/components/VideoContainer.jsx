import React, { useState, useEffect, useRef } from "react";
import Video from "./Video";
import { db } from "../firebaseConfig/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function VideoContainer() {
  const shortContainerRef = useRef();
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) =>
        setPosts(snapshot.docs)
      ),
    [db]
  );

  console.log(posts);
  return (
    <>
      <div className="flex w-full mx-auto justify-evenly ">
        <div
          ref={shortContainerRef}
          className="mx-auto snap-mandatory snap-y scroll- overflow-y-scroll h-screen scrollbar-hide"
        >
          {posts &&
            posts.map((post) => (
              <Video
                id={post.id}
                key={post.id}
                url={post.data().url}
                title={post.data().title}
                shortContainerRef={shortContainerRef}
              />
            ))}
        </div>

        <div className="hidden sm:flex items-center justify-between flex-col h-[80vh] mt-7 w-14">
          <div className="arrow"  onClick={() => {
            shortContainerRef.current.scrollTo(
              0,
              shortContainerRef.current.scrollTop - window.innerHeight
            );
          }}>
            <box-icon name="chevron-up" color="white"></box-icon>
          </div>

          <div
            className="arrow"
            onClick={() => {
              shortContainerRef.current.scrollTo(
                0,
                shortContainerRef.current.scrollTop + window.innerHeight
              );
            }}
          >
            <box-icon name="chevron-down" color="white"></box-icon>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoContainer;
