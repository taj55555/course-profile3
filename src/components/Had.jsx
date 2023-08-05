import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    // Replace 'YOUR_UPLOAD_URL' with the actual URL where you handle image upload on the server
    axios.post('YOUR_UPLOAD_URL', formData)
      .then((response) => {
        console.log('Image uploaded successfully!');
        setUploadedImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        // Handle error cases here
      });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected Preview"
          style={{ maxWidth: '200px' }}
        />
      )}
      {uploadedImageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '200px' }} />
        </div>
      )}
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
