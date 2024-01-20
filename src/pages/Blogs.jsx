import Blog from "../partials/Blog";
import HeaderSecondary from "../partials/HeaderSecondary";

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <HeaderSecondary />

      <main className="flex-grow mt-28">
        <div data-aos="zoom-in" className="my-4">
          <h2 className="h2 mb-4 text-center">
            Read Our Trending{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
              Blogs
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </main>
    </div>
  );
}
