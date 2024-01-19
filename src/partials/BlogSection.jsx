import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-16">
          <div className="max-w-3xl mx-auto text-center pb-0 md:pb-2">
            <h2 className="h2 mb-4">
              Today's{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-700">
                Blogs
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
        {/* /Heading */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  The Pines and the Mountains
                </Link>
              </h2>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                necessitatibus molestias explicabo.
              </p>
              <div>
                <a
                  href="#"
                  className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  The Coding Mania
                </Link>
              </h2>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                necessitatibus molestias explicabo.
              </p>
              <div>
                <a
                  href="#"
                  className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  Architectural Warfare
                </Link>
              </h2>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                necessitatibus molestias explicabo.
              </p>
              <div>
                <Link
                  to="/blog/1"
                  className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  Blues in Architechture
                </Link>
              </h2>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                necessitatibus molestias explicabo.
              </p>
              <div>
                <Link
                  to="/blog/1"
                  className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
          {/* /Article */}
        </div>
      </div>
    </section>
  );
}
