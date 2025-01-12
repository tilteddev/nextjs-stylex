'use client'

import { useState } from "react";

const ImageUploader = () => {
    const [image, setImage] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) {
            return;
        }
        const file = event.target.files[0];

        // Preview the image (optional)
        const previewUrl = URL.createObjectURL(file);
        setImage(previewUrl);

        // // Read the file as an ArrayBuffer
        // const arrayBuffer = await file.arrayBuffer();
        // setBuffer(arrayBuffer);
    };
    
    return (
        <div>
            {image && <img src={image} alt="Preview" style={{ maxWidth: '300px', marginTop: '10px' }} />}
            <input type="file" onChange={handleFileChange} />
        </div>
    )
}

export default ImageUploader;