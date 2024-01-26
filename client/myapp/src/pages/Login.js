import React from "react";
import { Form, Card, Button, Navbar, Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
// import actions
import { login } from "../redux/actions/user";
import { useNavigate } from "react-router-dom";
import { Reset_Message, Reset_Error } from "../redux/reducer/user";
import Error from "../components/Error";
function Login() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);
  console.log(error);
  const [user, setuser] = useState({
    user_email: "",
    user_password: "",
  });
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(Reset_Error());
    e.preventDefault();
    dispatch(login(user));
  };
  useEffect(() => {
    userInfo && navigate("/home");
  }, [userInfo]);

  useEffect(() => {
    dispatch(Reset_Error());
    dispatch(Reset_Error());
  }, [dispatch]);
  return (
    <div>
      <div className="  login  d-flex justify-content-center ">
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand className="title fs-3">
              Debugging Masters
            </Navbar.Brand>
            <Navbar.Toggle />
          </Container>
        </Navbar>

        <Card className="login_card shadow">
          <Card.Header className="d-flex justify-content-center">
            Login
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  className="m-2 login_input"
                  placeholder="useremail"
                  type="email"
                  name="user_email"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className="m-2 login_input"
                  placeholder="password"
                  type="password"
                  name="user_password"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button className="login_btn" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
          <div className="m-2">
            {" "}
            <spam className="login_link d-flex justify-content-center">
              <Link to="/register">You don't have an account?</Link>
            </spam>
          </div>
          <div className=" d-flex justify-content-center m-4">
            {error && <Error message={error} />}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;
