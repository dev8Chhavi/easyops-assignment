import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const existingUser = users.find((user) => user.id === id);
  
  // Ensure that an existing user with the given ID is found before proceeding
  if (!existingUser) {
    return <div>User not found.</div>;
  }

  const { name: initialName, email: initialEmail, phone: initialPhone } = existingUser;
  const [zname, setName] = useState(initialName);
  const [zemail, setEmail] = useState(initialEmail);
  const [zphone, setPhone] = useState(initialPhone);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (zname.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (zemail.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(zemail)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (zphone.trim() === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(zphone)) {
      setPhoneError("Invalid phone number format (10 digits required)");
      isValid = false;
    } else {
      setPhoneError("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      dispatch(updateUser({ id, name: zname, email: zemail, phone: zphone }));
      navigate("/");
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={zname}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="text-danger">{nameError}</div>
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
            <div className="text-danger">{emailError}</div>
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
            <div className="text-danger">{phoneError}</div>
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
