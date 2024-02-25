import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import React from "react";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Home = () => {
  //8cols layout4 cols sidebar IoReorderThreeOutline
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-400 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-bold">Ultimate Blog App</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600"></div>
          </div>
          <div>
            <button className="flex transition hover:border-gray-900 hover:text-900 rounded items-center space-x-2 border border-gray-200 px-4 py-2.5">
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className="grid gird-cols-12 ">test</div>
    </div>
  );
};

export default Home;

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
