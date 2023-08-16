import { useState } from "react";
import { addUser } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name, email, phone })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Create</button>
        </form>
      </div>
    </div>
  );
};
export default CreateUser;