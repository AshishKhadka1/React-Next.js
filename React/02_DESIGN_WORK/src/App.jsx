import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        hello world
      </h1>

      <div className="flex gap-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="sample image"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
            <p className="mt-4 text-gray-600 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              nobis vel magni architecto sunt rerum reiciendis est mollitia unde
              ipsum?
            </p>
            <button className="mt-4 px-4 bg-blue-600 text-white rounded-2xl py-2 hover:bg-blue-700">
              Buy now
            </button>
          </div>
        </div>{" "}
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="sample image"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
            <p className="mt-4 text-gray-600 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              nobis vel magni architecto sunt rerum reiciendis est mollitia unde
              ipsum?
            </p>
            <button className="mt-4 px-4 bg-blue-600 text-white rounded-2xl py-2 hover:bg-blue-700">
              Buy now
            </button>
          </div>
        </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="sample image"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
            <p className="mt-4 text-gray-600 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              nobis vel magni architecto sunt rerum reiciendis est mollitia unde
              ipsum?
            </p>
            <button className="mt-4 px-4 bg-blue-600 text-white rounded-2xl py-2 hover:bg-blue-700">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
