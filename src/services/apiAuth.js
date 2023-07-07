import supabase from "./supabase";

// signup
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: fullName,
        avatar: "",
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }

  return data
}

// login
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  // console.log(data)
  return data;
}

// get current user
export async function getCurrentUser() {
  // get data from localStorage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  // fetch current user from supabase
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  // console.log("data",data)

  return data?.user;
}

// logout
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
