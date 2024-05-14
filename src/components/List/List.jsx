import defaultPNG from '../../assets/default.png';
import { Link } from 'react-router-dom';
import StatusTag from '../status-tag/StatusTag';
import { useSelector } from 'react-redux';

const List = ({ 
    items, 
    type = 'equipment',
    onClick,
    onDelete }) => {
    
    const currentUser = useSelector(state => state.user.currentUser);

    const getURL = (item) => {
        switch (type) {
            case 'equipment': {
                if (currentUser?.role !== 'ADMIN')
                    return null;

                return `/equipment/${item.id}`;
            }
            case 'users': {
                return `/user-roles/${item.id}`
            }
            case 'requests': {
                return `/requests/${item.id}`
            }
            case 'bookings': {
                return `/my-bookings/${item.id}`
            }
            default: {
                return '/'
            }
        }
    }

    return (
        <div>
        {
            items.length ? items.map((item, id) => (
                <Link key={id} to={getURL(item)} 
                    className="list__item">  
                    <div className='list__item_content'>
                    {
                        Object.keys(item).map((key, id) => (
                            <div key={id} className={key === 'image' ? 'item__img_container' : ''}>
                            {
                                key === 'image' ? (
                                    <img src={'image' in item ?
                                        item['image'].length ? 
                                        item['image'] : defaultPNG : 
                                        defaultPNG} className='item__img'/>
                                ) : (
                                    <>
                                        <h4>{key}</h4>
                                        <span>{item[key]}</span>
                                    </>
                                )
                            }
                            </div>
                        ))
                    }
                    {
                        (type === 'equipment' || type === 'requests') && <StatusTag status={item.status}/>
                    }
                    </div>
                    { type === 'equipment' &&
                        <div className="row">
                            <button className="tertiary" onClick={(e) => onClick(e, item.id)}>Book</button>
                            <button className="error" onClick={(e) => onDelete(e, item.id)}>Delete</button>
                        </div>
                    }

                    { type === 'bookings' &&
                        <div className="row">
                            <button className="error" onClick={(e) => onDelete(e, item.id)}>Delete</button>
                        </div>
                    }
                </Link>
            )) : <p>No items</p>
        }
        </div>
    )
}

export default List;