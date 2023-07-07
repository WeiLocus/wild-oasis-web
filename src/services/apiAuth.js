import supabase from "./supabase";

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

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
