const BASE_URL = "https://ik.imagekit.io/liegedevs/";

export const getImageUrl = (filename, width = 800, quality = 80) => {
  return `${BASE_URL}${filename}?tr=w-${width},q-${quality}`;
};