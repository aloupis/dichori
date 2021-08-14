import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import HeaderItemContainer from './HeaderItemContainer';
import AddButton from '../../../common/AddButton';

const Header = ({ header, setHeader }) => {
  const handleAddItem = (parentId) => {
    if (!parentId) {
      setHeader((prev) => ({
        ...prev,
        items: [
          ...prev.items,
          { id: uuidv4(), name_en: '', name_gr: '', url: '', items: [] },
        ],
      }));
    } else {
      setHeader((prev) => ({
        ...prev,
        items: prev.items.map((x) =>
          x.id === parentId
            ? {
                ...x,
                items: [
                  ...x.items,
                  {
                    id: uuidv4(),
                    name_en: '',
                    name_gr: '',
                    url: '',
                    items: [],
                    parentId,
                  },
                ],
              }
            : x
        ),
      }));
    }
  };

  const handleDeleteItem = (item) => {
    if (!item.parentId) {
      setHeader((prev) => ({
        ...prev,
        items: prev.items.filter((x) => x.id !== item.id),
      }));
    } else {
      setHeader((prev) => ({
        ...prev,
        items: prev.items.map((x) =>
          x.items.some((y) => y.id === item.id)
            ? { ...x, items: x.items.filter((y) => y.id !== item.id) }
            : x
        ),
      }));
    }
  };

  const handleEditItem = (item) => {
    if (!item.parentId) {
      setHeader((prev) => ({
        ...prev,
        items: prev.items.map((x) => (x.id === item.id ? item : x)),
      }));
    } else {
      setHeader((prev) => ({
        ...prev,
        items: prev.items.map((x) =>
          x.items.some((y) => y.id === item.id)
            ? { ...x, items: x.items.map((y) => (y.id === item.id ? item : y)) }
            : x
        ),
      }));
    }
  };

  return (
    <>
      <div style={{ marginTop:'80px',marginBottom: '30px' }}>
        <Typography variant="h6">Header</Typography>
      </div>
      <div style={{ marginBottom: '10px' }} />
      {header.items.map((item) => (
        <HeaderItemContainer
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

Header.propTypes = {
  header: PropTypes.object,
  setHeader: PropTypes.func,
};

export default Header;
