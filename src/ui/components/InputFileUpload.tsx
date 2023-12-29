import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface IInputFileUploadProp{
    defaultValue: any,
    onChange: Function
}
export default function InputFileUpload({defaultValue, onChange}: IInputFileUploadProp) {
  const [selectedFile, setSelectedFile] = useState<File | null>(defaultValue[0]);
  const [dataURL, setDataURL] = useState<string>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();

        reader.onload = (e) => {
          // 'result' contains the Data URL
          const dataURL = e.target?.result as string;
          // console.log('Data URL:', dataURL);
          setDataURL(dataURL);
          onChange(file, dataURL)
          // You can use the Data URL as needed, for instance, setting it to state or using it directly.
        };

        reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          {/* You can display other information about the selected file */}
        </div>
      )}
    
    </>
  );
}