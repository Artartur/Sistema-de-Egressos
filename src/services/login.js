import Axios from "axios";

export const MakeLogin = (cpf) => {
  console.log(cpf);
  Axios.post(auth / login, {
    cpf: cpf,
  })
    .then((response) => {
      login(response.data.token);
      console.log(response.data.token);
    })
    .catch((error) => {
      console.error(error);
    });
};
