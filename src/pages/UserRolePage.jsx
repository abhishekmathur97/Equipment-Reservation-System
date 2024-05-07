import React from 'react';
import RoleAssignForm from '../components/role-assign-form/RoleAssignForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const roles = ['Admin', 'User', 'Editor', 'Moderator'];

const UserRolePage = () => {
    const { id } = useParams();
    const users = useSelector(state => state.user.users);
    const userById = users.find((user) => user.id === id);

    const handleSearchUser = (searchTerm) => {
        console.log('Search term:', searchTerm);
    };

    return (
        <section className='form__container'>
            <RoleAssignForm users={users}
                roles={roles} 
                onSearchUser={handleSearchUser} 
                user={userById}/>
        </section>
    )
}

export default UserRolePage