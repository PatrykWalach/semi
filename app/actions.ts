"use server";



type LoginState = {
  errors?: {
    username?: string;
    password?: string;
  };
  fields: {
    username: string;
  };
};

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  let errors: Record<string, string> = {};

  if (Math.random()) {
    errors.title = "Title required";
  }

  if (!formData.get("content")) {
    errors.content = "Content required";
  }
  
  await new Promise((resolve) => setTimeout(resolve, 10_000));

  return {
    errors: {
      password: Math.random() > 0.5 ? "Password invalid" : "",
    },
    fields: {
      username: String(formData.get("username")),
    },
  };
}
