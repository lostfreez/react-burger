import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useSelector } from "react-redux";
import { AuthState } from "../../services/types/types";

function ProfileEdit() {
  const userData = useSelector(
    (state: { authentificate: AuthState }) => state.authentificate
  );
  const [name, setName] = React.useState(userData.name);
  const [email, setEmail] = React.useState(userData.email);
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    setName(userData.name);
    setEmail(userData.email);
  }, [userData]);

  return (
    <div>
      <EmailInput
        name={"email"}
        placeholder={"Имя"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <EmailInput
        name={"email"}
        extraClass={`mt-6`}
        placeholder={"Логин"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        value={password}
        name={"password"}
        extraClass={`mt-6`}
        placeholder={"Пароль"}
        icon={"EditIcon"}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}

export default ProfileEdit;
