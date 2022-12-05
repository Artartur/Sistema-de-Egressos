import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("user_db");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.cpf === JSON.parse(userToken).cpf
      );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const login = (cpf) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.cpf === cpf);

    if (hasUser?.length) {
      if (hasUser[0].cpf === cpf) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ cpf, token }));
        setUser({ cpf });
        return;
      } else {
        return "CPF incorreto ou Não cadastrado";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const cadastrar = (cpf) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.cpf === cpf);

    if (hasUser?.length) {
      return "Já existe uma conta com esse CPF";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { cpf }];
    } else {
      newUser = [{ cpf }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, login, cadastrar, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
