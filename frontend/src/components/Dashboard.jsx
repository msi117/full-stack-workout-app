import Search from "./Search";
import { Link } from "react-router-dom";
function Dashboard() {

  return (
    <div className="container">
      <Search />
      <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 m-3">
        <div className="card-body">
          <h2 className="card-title">Quote of the day!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, suscipit.
          </p>
        </div>
      </div>
      <h3 className="m-4">Select workout by part</h3>

      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <div className="card bg-gradient-to-r from-sky-200 to-indigo-400 m-2">
            <figure>
              <img
                src="http://d205bpvrqc9yn1.cloudfront.net/1257.gif"
                alt="skldfjd"
                className="w-full border rounded-box"
              />
            </figure>
            <div className="card-body">
              <div className="card-title">
                <p className="text-center">Chest</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-gradient-to-r from-indigo-200 to-pink-200 m-2">
            <figure>
              <img
                src="http://d205bpvrqc9yn1.cloudfront.net/0684.gif"
                alt="skldfjd"
              />
            </figure>
            <div className="card-body">
              <div className="card-title">
                <p>Cardio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-gradient-to-r from-sky-300 to-pink-300 m-2">
            <figure>
              <img
                src="http://d205bpvrqc9yn1.cloudfront.net/0993.gif"
                alt="skldfjd"
              />
            </figure>
            <div className="card-body">
              <div className="card-title">
                <p>Shoulders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/exercises" className="m-4">
        <button className="btn btn-accent mx-auto  w-11/12">
          View All Exercises
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;
