"use client";

import React, { useState } from 'react';
const axios = require('axios').default;

const UploadManga = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const formData = new FormData();

  const handleFileSelection = async (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (!selectedFile) {
      setError('Please select an image');
      return;
    }

    if (!selectedFile)
      {
        setError('Please select an image');
        return;
      } 
    formData.append('file', selectedFile);
  };

  const postData = async(e) => {

    e.preventDefault();

    if(!file){
      setError('Please select an image before submitting');
      return;
    }


    setUploading(true);
    setError(null);


    try {
      const response = await axios.post('/upload-manga', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        alert('Upload successful');
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col items-center mt-4">
      {file ? (
        <div>
          <label className="bg-lightBlue text-white py-2 px-4 rounded cursor-pointer hover:bg-darkBlue">
            Choose another file
            <input 
              type="file" 
              onChange={handleFileSelection} 
              className="hidden" 
            />
          </label>
          <p className="mt-2 text-center">File: {file.name}</p>
          <label>
            <button className="mt-2 bg-lightBlue text-white py-2 px-4 rounded cursor-pointer hover:bg-darkBlue" onClick={postData} type="submit" >Confirm</button>
          </label>
        </div>
      ) : (
        <label className="bg-lightBlue text-white py-2 px-4 rounded cursor-pointer hover:bg-darkBlue">
          Choose a file
          <input 
            type="file" 
            onChange={handleFileSelection} 
            className="hidden" 
          />
        </label>
      )}
      {uploading && <p className="mt-2 text-center z-50">Uploading...</p>}
      {error && <p className="mt-2 bg-darkBlue p-3 rounded-lg text-center text-red-600 z-50">{error}</p>}
    </div>
  );
};

export default UploadManga;
