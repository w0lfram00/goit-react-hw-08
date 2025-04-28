import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";
import { clearContacts } from "../../redux/contacts/slice";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
    dispatch(clearContacts());
  };

  return (
    <header>
      <div>HMW-08</div>
      {isLoggedIn && <div>Greetings {user.name}!</div>}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <NavLink to="/contacts">Phonebook</NavLink>
              </li>
              <li>
                <button onClick={handleClick}>Log Out</button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
