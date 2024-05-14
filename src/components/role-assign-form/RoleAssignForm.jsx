import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store/userSlice';

const RoleAssignForm = ({
  users,
  roles, 
  onSearchUser, 
  user }) => {
  const [selectedRole, setSelectedRole] = useState(user.role);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userActions.assignRole({
      userId: user.id,
      role: selectedRole
    }));

    navigate('/user-roles');
  }

  return (
    <form onSubmit={handleSubmit} className='column'>
      <h3>Assign role</h3>
      <input type="text" value={user.email} disabled/>
      <select id="roleSelect" value={selectedRole} onChange={handleRoleChange}>
        <option value="">Choose a role</option>
        {
          roles?.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))
        }
      </select>
      <button type='submit' className='primary'>Save</button>
    </form>
  );
};

export default RoleAssignForm;