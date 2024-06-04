import { Suspense } from "react";
import Changer from "../../components/changer";
import SocialPosts from "../../components/post";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mb-24 ">
      <Changer />
      <Suspense fallback={<div>Loading...</div>}>
        <SocialPosts />
      </Suspense>
    </main>
  );
}
