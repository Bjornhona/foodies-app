'use client'
import {useRef, useState} from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({label, name}) => {
  const [pickedImage, setPickedImage] = useState();
  const inputImageRef = useRef();

  const handlePickClick = () => {
    inputImageRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const url = fileReader.result;
      setPickedImage(url);
    }
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet!</p>}
          {pickedImage && <Image 
            src={pickedImage} 
            alt={'The image selected by the user.'} 
            fill
          />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name} 
          name={name} 
          accept="image/png, image/jpg"
          ref={inputImageRef}
          // multiple
          onChange={handleImageChange}
          required
        />
        <button 
          className={classes.button}
          onClick={handlePickClick}
          type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;