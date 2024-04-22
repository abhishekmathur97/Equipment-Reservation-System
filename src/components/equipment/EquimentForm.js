import React, { useState } from 'react';

const EquipmentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [total, setTotal] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !description.trim()) {
      return;
    }
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='column'>
      <input
        placeholder="Equipment Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        multiline="true"
        rows={4}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <input 
        placeholder='0' 
        type='number'
        value={total}
        onChange={(event) => setTotal(event.target.value)}
        required/>
      <button type="submit">
        Add Equipment
      </button>
    </form>
  );
};

export default EquipmentForm;
