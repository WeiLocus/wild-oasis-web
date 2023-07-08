import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

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

  return data;
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

// update user data
export async function updateUserData({ fullName, password, avatar }) {
  // update password or fullName
  let updateData;
  if (password) {
    updateData = { password };
  }
  if (fullName) {
    updateData = { data: { fullName } };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  console.log("data", data);
  if (!avatar) return data;

  // upload avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // update avatar in the user
  const { data: updatedUser, error: updatedError } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (updatedError) throw new Error(updatedError.message);
  return updatedUser
}
