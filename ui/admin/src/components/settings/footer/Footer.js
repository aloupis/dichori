import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import AddButton from '../../../common/AddButton';

const Footer = ({ footer, setFooter }) => {
  const handleAddItem = () => {
    setFooter((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: uuidv4(), name_en: '', name_gr: '', url: '' },
      ],
    }));
  };

  const handleDeleteItem = (item) => {
    setFooter((prev) => ({
      ...prev,
      items: prev.items.filter((x) => x.id !== item.id),
    }));
  };

  const handleEditItem = (item) => {
    setFooter((prev) => ({
      ...prev,
      items: prev.items.map((x) => (x.id === item.id ? item : x)),
    }));
  };

  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <Typography variant="h6">Footer</Typography>
      </div>
      <div style={{ marginBottom: '10px' }} />
      {footer.items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onAddItem={handleAddItem}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}
      <AddButton onClick={() => handleAddItem(null)} />
    </>
  );
};

Footer.propTypes = {
  footer: PropTypes.object,
  setFooter: PropTypes.func,
};

export default Footer;
