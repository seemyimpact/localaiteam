'use client';

export default function TailwindTest() {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        Tailwind CSS Test
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          Red Box with Tailwind
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          Green Box with Tailwind
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          Blue Box with Tailwind
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          Yellow Box with Tailwind
        </div>
      </div>
    </div>
  );
}
