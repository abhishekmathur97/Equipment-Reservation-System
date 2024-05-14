const StatusTag = ({ status }) => {
    const getBgColor = (status) => {
        switch (status.toLowerCase()) {
            case 'available':
                return 'success';
            case 'in repair':
                return 'warning';
            case 'in use':
                return 'error';
            case 'accepted':
                return 'success';
            case 'declined':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <div className={`tag ${getBgColor(status)}`}>
            {status}
        </div>
    )
}

export default StatusTag;