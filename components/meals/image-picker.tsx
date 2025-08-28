"use client";
import { ChangeEvent, useRef, useState } from "react";
import classes from "./image-picker.module.scss";
import Image from "next/image";

export default function ImagePicker({
  label,
  name,
}: {
  label?: string;
  name?: string;
}) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const inputElementRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputElementRef.current!.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>): void {
    const file = (event.target.files as FileList)[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage as string}
              alt="Image picked by user"
              fill
            />
          )}
        </div>
        <input
          ref={inputElementRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Choose image
        </button>
      </div>
    </div>
  );
}
