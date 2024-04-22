import defaultPNG from '../../assets/default.png';
import { Link } from 'react-router-dom';

const List = ({ items }) => {
    return (
        <div>
        {
            items.length ? items.map((item, id) => (
                <Link key={id} to={`/equipment/${item.id}`} className="list__item">  
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
                </Link>
            )) : <p>No items to display</p>
        }
        </div>
    )
}

export default List;