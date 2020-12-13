import api from "./config";

const signIn = (variables: any) => {
  api
    .get("v1/auth/login", {
      headers: { email: variables.email, senha: variables.password },
    })
    .then()
    .catch((err) => console.log(err));
};

export { signIn };
