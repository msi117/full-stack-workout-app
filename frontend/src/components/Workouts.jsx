import React from "react";

function Workouts({ items }) {
  console.log(items);
  return (
    <div className="grid grid-cols-2 font-mono">
      {items.map((item) => (
        <div key={item.id} className="card bg-base-100 border m-2">
          <figure>
            <img src={item.gifUrl} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title w-full leading-5 mb-2 tracking-tight capitalize">
              {item.name}
            </h2>
            <p className="text-xs capitalize"> Target Area: {item.target}</p>
            <button className="" onClick={() => console.log(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Workouts;
