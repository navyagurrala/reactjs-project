import { useNavigate } from "react-router-dom";

const Postnavbar = () => {
  const remindernavigate = useNavigate();

  const handlenavigate = () => {
    remindernavigate("/reminder");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#">TASK-MANAGER</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">ADD TASK</a>
            </li>
            <li className="nav-item">
              <a onClick={handlenavigate} className="nav-link text-white" href="#">SET REMINDER</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Postnavbar;
