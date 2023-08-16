import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ViewUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const currentUser = users.filter((user) => user.id == id);

  return (
    <div className="container">
      <div className="card my-5">
        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <table className="table table-striped">
            <thead>
              <tr> 
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentUser[0].id}</td>
                <td>{currentUser[0].name}</td>
                <td>{currentUser[0].email}</td>
                <td>{currentUser[0].phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ViewUser;