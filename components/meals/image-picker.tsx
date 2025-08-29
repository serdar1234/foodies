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
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const inputElementRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputElementRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>): void {
    const files = event.target.files;
    if (!files || files.length === 0) {
      setPickedImage(null);
      return;
    }

    const file = files[0];
    if (!file.type.startsWith("image")) {
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPickedImage(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file as File);
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
          Choose an image
        </button>
      </div>
    </div>
  );
}
