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

// create/edit : 傳入object from react-hook-form data 或 目前的cabinId
// supabase image path example:
// https://pailwlkfdhultwskkxvu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

export async function createOrEditCabin(newCabin, id) {
  
  // check if already has image path in cabin table
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // specify unique image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");
  // 1. create cabin if no id and return new create object
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  // edit cabin if has id
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. upload image to supabase
  if (hasImagePath) return data
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
