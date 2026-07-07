function Card({title="Default Title", buttonText="Buy now", imageurl="#", paragraph}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
      <img
        className="w-full h-48 object-cover"
        src={imageurl}
        alt="sample image"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600 text-sm">
            {paragraph}        </p>
        <button className="mt-4 px-4 bg-blue-600 text-white rounded-2xl py-2 hover:bg-blue-700">
            {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
