import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteBtn } from '../../../common/DeleteBtn';

const Item = ({ item, onEditItem, onDeleteItem }) => {
  const handleChange = (evt, prop) => {
    onEditItem({ ...item, [prop]: evt.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <TextField
          id="name_en"
          name="name_en"
          label="name en "
          variant="outlined"
          onChange={(evt) => handleChange(evt, 'name_en')}
          value={item.name_en || ''}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="name_gr"
          name="name_gr"
          label="name gr"
          variant="outlined"
          onChange={(evt) => handleChange(evt, 'name_gr')}
          value={item.name_gr || ''}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="url"
          name="url"
          label="url"
          variant="outlined"
          onChange={(evt) => handleChange(evt, 'url')}
          value={item.url || ''}
        />
      </Grid>
      <Grid item xs={2}>
        <DeleteBtn size="medium" onClick={() => onDeleteItem(item)}>
          <DeleteIcon />
        </DeleteBtn>
      </Grid>
    </Grid>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

export default Item;
