import defaultPNG from '../../assets/default.png';
import React from 'react';
import { Chip } from '@mui/material';

const getChipColor = (status) => {
  switch (status.toLowerCase()) {
    case 'available':
      return 'success';
    case 'in repair':
      return 'warning';
    case 'in use':
      return 'error';
    default:
      return 'default';
  }
};

const List = ({ items }) => {
  return (
    <div>
      {items.length ? (
        items.map((item, id) => (
          <div key={id} className="list__item">
            {Object.keys(item).map((key, id) => (
              <React.Fragment key={id}>
                {key === 'image' ? (
                  <div className="item__img_container">
                    <img
                      src={
                        'image' in item
                          ? item['image'].length
                            ? item['image']
                            : defaultPNG
                          : defaultPNG
                      }
                      className="item__img"
                      alt="Item"
                    />
                  </div>
                ) : key === 'status' ? (
                  <div>
                    <h4>{key}</h4>
                    <Chip
                      label={item[key]}
                      color={getChipColor(item[key])}
                    />
                  </div>
                ) : (
                  <div>
                    <h4>{key}</h4>
                    <span>{item[key]}</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default List;