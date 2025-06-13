import React, { useEffect } from "react";

const ImageDebug = () => {
  useEffect(() => {
    // Try to load each image and log results
    const images = [
      "/assets/CoverPage.jpg",
      "/assets/Dr.ShraddhaSharmaSmiling.jpg",
      "/assets/Dr.VijaySharmaWorking.jpg",
      "/assets/Dr.ShraddhaSharmaWorking.jpg",
      "/assets/BothTheDoctorsTogether.jpg",
    ];

    images.forEach((src) => {
      const img = new Image();
      img.onload = () => console.log(`Image loaded successfully: ${src}`);
      img.onerror = () => console.error(`Failed to load image: ${src}`);
      img.src = src;
    });
  }, []);

  return null;
};

export default ImageDebug;
