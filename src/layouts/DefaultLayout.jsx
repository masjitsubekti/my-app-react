import { Link } from "react-router-dom";
import Sidebar from "../components/partials/Sidebar";
import Header from "../components/partials/Header";
import Breadcrumb from "../components/partials/Breadcrumb";

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />

      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />

        <div
          id="main-content"
          class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
              <div class="w-full mb-1">
                <div class="mb-4">
                  {/* Breadcrumb */}
                  {/* <Breadcrumb /> */}

                  {/* Content */}
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default DefaultLayout;
