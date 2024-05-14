import React, { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { equipmentActions } from '../../store/equipmentSlice';

const EquipmentForm = ({ equipment = null }) => {
  const [name, setName] = useState(equipment ? equipment.name : '');
  const [description, setDescription] = useState(equipment ? equipment.description : '');
  const [total, setTotal] = useState(equipment ? equipment.total : 0);
  const [status, setStatus] = useState(equipment ? equipment.status : 'available');
  const [isAdmin, setIsAdmin] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !description.trim()) {
      return;
    };

    if (!equipment) {
      dispatch(equipmentActions.addEquipment({
        id: crypto.randomUUID(),
        name, 
        description, 
        total,
        status,
        image: '',
      }));
    } else {
      dispatch(equipmentActions.updateEquipment({
        id: equipment.id,
        name, 
        description, 
        total,
        status,
      }))
    }
    
    navigate('/');
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
      <select value={status} onChange={(event) => setStatus(event.target.value)}>
        <option>available</option>
        <option>in use</option>
        <option>in repair</option>
      </select>
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
