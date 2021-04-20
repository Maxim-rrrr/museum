import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


const Dropzone = (props) => {
  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    width: "100%",
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    overflow: 'hidden',
    minHeight: '300px',
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
    maxHeight: '300px',
    margin: "0 auto"
  };
  
  const dropzoneSection = {
    width: '100%',
    minHeight: '300px',
    margin: props.full ? "20vh auto 0" : 0
  };
  
  const dropzone = {
    textAlign: "center",
    padding: "2rem",
    cursor: "pointer",
    border: "3px dashed #D9DAD2",
    borderRadius: "5px" 
  }


  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));

      props.setContent(acceptedFiles[0]) 
    }
  });
  
  const thumbs = files.map(file => {
    return (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
    )
  });

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section style={dropzoneSection}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p style={dropzone}> Добавить фотографию </p>
      </div>
      
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

export default Dropzone