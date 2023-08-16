import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="container">
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-text">User Management System</span>
          </div>
        </nav>
      </div>
      <Link to="/create" className="btn btn-success my-3">
        Add User
      </Link>
      <table className="table">
        <thead>
          <th width="30%">ID</th>
          <th width="40%">Name</th>
          <th width="30%">Action</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button className="btn btn-sm btn-primary mx-1 my-1 ">
                  View
                </button>
                <Link
                  to={`/update/${user.id}`}
                  className="btn btn-sm btn-success mx-1 my-1 "
                >
                  Edit
                </Link>
                <button className="btn btn-sm btn-danger mx-1 my-1 ">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
