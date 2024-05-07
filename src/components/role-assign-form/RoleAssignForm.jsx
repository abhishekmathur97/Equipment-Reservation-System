import React, { useState } from 'react';

const RoleAssignForm = ({users, roles, onSearchUser }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRole, setSelectedRole] = useState('');


  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSearchUser = (event) => {
    const searchTerm = event.target.value;
    onSearchUser(searchTerm);
  };

  return (
    <div>
      <div>
        <label htmlFor="userSelect">Select User:</label>
        <select id="userSelect" value={selectedUser} onChange={handleUserChange}>
          <option value="">Choose a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <input
          class="search-bar"
          type="text"
          placeholder="Search users..."
          onChange={handleSearchUser}
        />
      </div>
      <div>
        <label htmlFor="roleSelect">Select Role:</label>
        <select id="roleSelect" value={selectedRole} onChange={handleRoleChange}>
          <option value="">Choose a role</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RoleAssignForm;