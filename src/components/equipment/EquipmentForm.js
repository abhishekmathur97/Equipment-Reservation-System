import React, { useState } from 'react';

const EquipmentForm = ({ equipment = null }) => {
  const [name, setName] = useState(equipment ? equipment.name : '');
  const [description, setDescription] = useState(equipment ? equipment.description : '');
  const [total, setTotal] = useState(equipment ? equipment.total : 0);
  const [isAdmin, setIsAdmin] = useState(false);

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
      <h3>{ name.length ? name : 'New Equipment' }</h3>
      <input
        placeholder="Equipment Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        readOnly={!isAdmin}
        required
      />
      <textarea
        placeholder="Description"
        multiline="true"
        rows={4}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        readOnly={!isAdmin}
        required
      />
      <input 
        placeholder='0' 
        type='number'
        value={total}
        onChange={(event) => setTotal(event.target.value)}
        readOnly={!isAdmin}
        required/>
      { isAdmin && 
        <button type="submit" className='primary'>
          Submit
        </button>
      }
    </form>
  );
};

export default EquipmentForm;
