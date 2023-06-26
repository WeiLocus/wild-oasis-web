import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  // READ ALL ROWS
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// delete : 傳入id
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

// create : 傳入object from react-hook-form data
// supabase image path example: 
// https://pailwlkfdhultwskkxvu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

export async function createCabin(newCabin) {
  // specify unique image name
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
      "/",
      ""
    );
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. upload image to supabase
  const { error: uploadImageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  // delete the cabin if there was an error uploading image
  if (uploadImageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(uploadImageError);
    throw new Error(
      "Cabin image could not be uploading and cabin was not created"
    );
  }

  return data;
}
