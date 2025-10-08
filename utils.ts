/**
 * Converts a File object to a base64 encoded string.
 * This is used to create a data URL for images so they can be stored
 * in localStorage and displayed in the browser without a backend.
 * @param file The file to convert.
 * @returns A promise that resolves with the base64 data URL.
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
