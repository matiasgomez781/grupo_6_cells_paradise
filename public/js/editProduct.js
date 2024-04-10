function deleteImage(imageId) {
  const imgDeleted = document.getElementById(`image-${imageId}`);
  imgDeleted.style.display = 'none';

  // Enviar una solicitud DELETE al servidor
  fetch(`/products/delete-img/${imageId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        imgDeleted.style.display = 'block';
        throw new Error("Falló la eliminación de la imagen");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Imagen eliminada", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
