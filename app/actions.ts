

export type LoginState = {
  errors?: {
    username?: string;
    password?: string;
  };
  fields: {
    username: string;
  };
};

export async function login(
 
  formData: FormData
): Promise<LoginState> {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 5_000));

  return {
    errors: {
      password: Math.random() > 0.5 ? "Password invalid" : "",
    },
    fields: {
      username: String(formData.get("username")),
    },
  };
}

export type RegisterState = {
  errors?: {
    username?: string;
    password?: string;
    email?: string;
  };
  fields: {
    username: string;
    email: string;
  };
};

export async function register(

  formData: FormData
): Promise<RegisterState> {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 5_000));

  return {
    errors: {
      password: Math.random() > 0.5 ? "Password too easy" : "",
      username: Math.random() > 0.5 ? "Username taken" : "",
      email: Math.random() > 0.5 ? "Email not valid" : "",
    },
    fields: {
      username: String(formData.get("username")),
      email: String(formData.get("email")),
    },
  };
}
