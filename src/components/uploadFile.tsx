// import React from "react"

interface UploadFileProps {
  onFileChange: (file: File) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ onFileChange }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      if (fileExtension === 'gif') {
        onFileChange(selectedFile);
        console.log('Selected .gif file:', selectedFile.name);
      } else {
        window.alert('Please select a .gif file.');
      }
    }
  };
  return (
    <div>
      <label htmlFor="fileInput" className="btn btn-outline-primary">
        Upload Image File
      </label>
      <input
        className="d-none"
        type="file"
        id="fileInput"
        onChange={handleFileChange}
      />
    </div>
  )
};

export default UploadFile;
