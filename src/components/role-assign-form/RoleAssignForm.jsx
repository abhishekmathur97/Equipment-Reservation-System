import React, { useState } from 'react';

const RoleAssignForm = ({
  users,
  roles, 
  onSearchUser, 
  user }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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