import RoleAssignForm from "../components/role-assign-form/RoleAssignForm";

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Williams' },
  ];

const roles = ['Admin', 'User', 'Editor', 'Moderator'];

const handleSearchUser = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };

const RolesPage = () => {
    return (
        <section>
            <RoleAssignForm users={users} roles={roles} onSearchUser={handleSearchUser}/>
            
        </section>
    )
}

export default RolesPage;