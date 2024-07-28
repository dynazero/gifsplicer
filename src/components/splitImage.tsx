import React, { useState, useEffect } from "react"
import gif from '../assets/nyancat.gif';
import './splitImage.css'

interface SplitImageProps {
    selectedFile: File | null;
    numRows: number;
    numColumns: number;
}

const SplitImage: React.FC<SplitImageProps> = ({ selectedFile, numRows, numColumns }) => {
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({ width: 316, height: 200 });
    const [previewUrl, setPreviewUrl] = useState<string>('');

    useEffect(() => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result as string);
                const img = new Image();
                img.src = reader.result as string;
                img.onload = () => {
                    setImageDimensions({ width: img.width, height: img.height });
                };
            };
            reader.readAsDataURL(selectedFile);
        }
    }, [selectedFile]);


    // Calculate slice dimensions based on imageDimensions
    const sliceWidth = imageDimensions.width / numColumns;
    const sliceHeight = imageDimensions.height / numRows;

    const slicedImages = [];

    //
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            const left = col * sliceWidth;
            const top = row * sliceHeight;
            const style = {
                backgroundImage: `url(${previewUrl || gif})`,
                backgroundPosition: `-${left}px -${top}px`,
                width: sliceWidth,
                height: sliceHeight,
            };

            slicedImages.push(
                <div key={`slice-${row}-${col}`} style={style}></div>
            );
        }
    }

    return (

        <div>
            <div className="image-slicer" style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}>
                {slicedImages}
            </div>
        </div>
    );
};

export default SplitImage;
