import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const FileInput = ({ label }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '15px', margin: '5px 0 15px', width: '100%', alignItems: 'center' }}>
      <input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="file-input" style={{ width: '100%' }}>
        <Button
          variant="contained"
          component="span"
          sx={{
            width: '100%',
            minHeight: '45px',
            color: 'white',
            backgroundColor: '#507AC2',
            borderRadius: '10px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#013A93',
            },
          }}
        >
          {label}
        </Button>
      </label>
      {fileName && (
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Arquivo Selecionado: {fileName}
        </Typography>
      )}
    </div>
  );
};

export default FileInput;
