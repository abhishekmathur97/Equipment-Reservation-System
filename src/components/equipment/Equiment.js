import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

const AddEquipmentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate input fields
    if (!name.trim() || !description.trim()) {
      return;
    }
    // Call the onSubmit function passed from parent component
    onSubmit({ name, description });
    // Clear input fields after submission
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Equipment Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Add Equipment
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddEquipmentForm;
