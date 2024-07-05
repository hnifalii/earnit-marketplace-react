import React from "react";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="flex flex-row gap-12 justify-center">
          {/* <!-- Sidebar --> */}
          <div className="flex flex-col max-w-[200px] list-none my-[40px] gap-2">
            <div className="flex flex-col border-2 rounded-md gap-1">
              <a href="#" className="px-4 py-2">
                Dashboard
              </a>
              <a href="#" className="px-4 py-2">
                Order History
              </a>
              <a href="#" className="px-4 py-2">
                Track Order
              </a>
              <a href="#" className="px-4 py-2">
                Wishlist
              </a>
              <a href="#" className="px-4 py-2">
                Cards and Address
              </a>
              <a href="#" className="px-4 py-2">
                Browsing History
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-blue-500 text-white rounded-b-md"
              >
                Setting
              </a>
            </div>
            <a href="#">
              <div className="px-4 py-2 bg-[#fc2b2b] text-white text-center rounded-md">
                Log-out
              </div>
            </a>
          </div>

          {/* <!-- Account Setting --> */}
          <div className=" my-[40px]">
            {/* <!-- Title Profile --> */}
            <div className="border-2 border-b-0 rounded-t-md p-4 ">
              <h5>ACCOUNT SETTING</h5>
            </div>

            {/* <!-- Profile Contain --> */}
            <div className="flex border-2 rounded-b-md">
              {/* <!-- Photo Profile --> */}
              <div className="p-4 max-w-[180px]">
                <img
                  src="assets/NIGGA.jpg"
                  alt="profile-picture"
                  className="rounded-full object-contain"
                />
              </div>

              {/* <!-- Content --> */}
              <form>
                <div className="flex">
                  <div className="flex flex-col p-4">
                    <label for="display-name">Full name</label>
                    <input
                      type="text"
                      id="display-name"
                      className="border rounded p-2 mr-[-20px] focus:outline-none"
                      placeholder="Kevin Ladoo Singh"
                      required
                    />
                  </div>

                  <div className="flex flex-col p-4">
                    <label for="display-name">Username</label>
                    <input
                      type="text"
                      id="display-name"
                      className="border rounded p-2 focus:outline-none"
                      placeholder="Kevin"
                      required
                    />
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col p-4">
                    <label for="display-name">Email</label>
                    <input
                      type="text"
                      id="display-name"
                      className="border rounded p-2 mr-[-20px] focus:outline-none"
                      placeholder="Kevin.gilbert@gmail.com"
                      required
                    />
                  </div>

                  <div className="flex flex-col p-4">
                    <label for="display-name">Phone Number</label>
                    <input
                      type="text"
                      id="display-name"
                      className="border rounded p-2 focus:outline-none"
                      placeholder="+1-202-555-0118"
                      required
                    />
                  </div>
                </div>

                {/* <!-- Button --> */}
                <button
                  id="button"
                  type="submit"
                  className="bg-blue-500 text-white m-4 py-2 px-4 font-semibold rounded hover:bg-blue-400"
                >
                  SAVE CHANGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
