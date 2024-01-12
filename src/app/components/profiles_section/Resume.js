// components/ResumeUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { showToast } from '../../../../lib/toast';

const ResumeUpload = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      const rejectedFile = rejectedFiles[0];

      if (rejectedFile.errors && rejectedFile.errors.length > 0) {
        showToast(`Error: ${rejectedFile.errors[0].message}`, 'error');
      } else {
        showToast('Invalid file format. Please upload a PDF.', 'error');
      }

      return;
    }

    const file = acceptedFiles[0];

    if (file.type.startsWith('application/pdf')) {
      onUpload(file);
    } else {
      showToast('Invalid file type. Please upload a PDF file.', 'error');
    }

    if (file.size > 1048576) {
      showToast('File size exceeds the limit of 1MB. Please upload a smaller file.', 'error');
      return;
    }
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdf',
    onDrop,
    multiple: false, // Allow only one file to be uploaded
  });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input type='file' name='resume' {...getInputProps()} />
      <p>Drag drop a PDF file here, or click to select one</p>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #0087F7',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ResumeUpload;
