import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import { updateUser } from "../redux/userReducer";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email, phone } = existingUser[0];
  const [zname, setName] = useState(name);
  const [zemail, setEmail] = useState(email);
  const [zphone, setPhone] = useState(phone);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(users.length);
  //   dispatch(updateUser({ id: id, name: zname, email: zemail, phone: zphone }));
  //   navigate("/");
  // };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form /*onSubmit={handleSubmit}*/>
          <div className="my-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={zname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={zemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              value={zphone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateUser;
