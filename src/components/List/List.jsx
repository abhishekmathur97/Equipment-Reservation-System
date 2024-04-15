import defaultPNG from '../../assets/default.png';

const List = ({ items }) => {
    return (
        <div>
        {
            items.length ? items.map((item, id) => (
                <div key={id} className="list__item">  
                    {
                        Object.keys(item).map((key, id) => (
                            <>
                            {
                                key === 'image' ? (
                                    <div key={id} className='item__img_container'>
                                        <img src={'image' in item ?
                                            item['image'].length ? 
                                            item['image'] : defaultPNG : 
                                            defaultPNG} className='item__img'/>
                                    </div>   
                                ) : (
                                    <div key={id}>
                                        <h4>{key}</h4>
                                        <span>{item[key]}</span>
                                    </div>
                                )
                            }
                            </>
                        ))
                    }
                </div>
            )) : <p>No items to display</p>
        }
        </div>
    )
}

export default List;