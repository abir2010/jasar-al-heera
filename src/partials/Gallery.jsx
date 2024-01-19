export default function Gallery() {
  return (
    <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
      <div className="xl:w-1/2 w-11/12">
        <div className="max-w-3xl mx-auto text-center pb-0 md:pb-2">
          <h2 className="h2 mb-4">
            Touching{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-700">
              Hundreds of Lives
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
      </div>
      <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
        <div className="mt-24">
          <div className="flex items-end ">
            <img
              tabIndex={0}
              src="https://i.ibb.co/kBgtHK6/Rectangle-5.png"
              alt="girl with blue background"
              className="w-20 h-20 rounded-lg mr-6"
            />
            <img
              tabIndex={0}
              src="https://i.ibb.co/9nLBtjx/Rectangle-3.png"
              alt="guy winking"
              className="w-48 h-36 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-end my-6">
            <img
              tabIndex={0}
              src="https://i.ibb.co/jRbF1KF/Rectangle-4.png"
              alt="guy smiling"
            />
          </div>
          <div className="flex items-start">
            <img
              tabIndex={0}
              src="https://i.ibb.co/Sf4Q94L/Rectangle-6.png"
              alt="girl with bluw background"
              className="w-48 h-48 rounded-lg"
            />
            <img
              tabIndex={0}
              src="https://i.ibb.co/fnNqJrx/Rectangle-7.png"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
            />
          </div>
        </div>
        <div className="ml-6 mt-32">
          <img
            tabIndex={0}
            src="https://i.ibb.co/LSxy7fy/Rectangle-9.png"
            className="w-72 h-80 rounded-lg"
            alt="guy with sunglasses"
          />
          <div className="flex items-start mt-6">
            <img
              tabIndex={0}
              src="https://i.ibb.co/X8PKD3q/Rectangle-8.png"
              alt="girl  laughing"
              className="w-48 h-48 rounded-lg"
            />
            <img
              tabIndex={0}
              src="https://i.ibb.co/2Yj51CY/Rectangle-13.png"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
            />
          </div>
        </div>
        {/* <div className="mt-14 ml-6">
          <div className="lg:flex ">
            <div>
              <img
                tabIndex={0}
                src="https://i.ibb.co/bWGVSkP/Rectangle-10.png"
                alt="group of friends"
                className="w-96 h-72 rounded-lg object-center object-fit"
              />
            </div>
            <div>
              <div className="flex ml-6">
                <img
                  tabIndex={0}
                  src="https://i.ibb.co/80jvpSv/Rectangle-16.png"
                  className="w-20 h-20 rounded-lg mt-14"
                  alt="man"
                />
                <img
                  tabIndex={0}
                  src="https://i.ibb.co/6PR2Y74/Rectangle-15.png"
                  className="w-20 h-24 rounded-lg ml-6"
                  alt="woman"
                />
              </div>
              <img
                tabIndex={0}
                src="https://i.ibb.co/M5rvjhk/Rectangle-14.png"
                alt="boy with blonde hair"
                className="ml-6 mt-6 w-48 h-32 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 flex">
            <img
              tabIndex={0}
              className="w-48 h-48 rounded-lg"
              src="https://i.ibb.co/GPpMsbr/Rectangle-12.png"
              alt="young girl with red hair"
            />
            <img
              tabIndex={0}
              className="w-72 h-56 rounded-lg ml-6"
              src="https://i.ibb.co/VBcgkVL/Rectangle-11.png"
              alt="young girl with red hair"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}