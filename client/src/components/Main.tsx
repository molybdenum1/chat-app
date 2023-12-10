import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import { useState } from "react";

const FIELDS = {
  username: "username",
  room: "room",
};

const Main = () => {
  const { username, room } = FIELDS;
  const [values, setValues] = useState({ [username]: "", [room]: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isDisabled = Object.values(values).some((value) => !value);
    console.log(isDisabled);
    if (isDisabled) e.preventDefault(); 
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>
        <form action="" className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="username"
              placeholder="Input your username"
              value={values[username]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="room"
              placeholder="Input room number"
              value={values[room]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <Link
            className={styles.group}
            to={`/chat?username=${values[username]}&room=${values[room]}`}
          >
            <button
              type="submit"
              className={styles.button}
              onClick={handleClick}
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
      Main
    </div>
  );
};

export default Main;
