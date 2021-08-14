import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddButton = ({ onClick }) => (
  <Box display="flex" justifyContent="center" style={{ padding: '10px' }}>
    <Fab color="primary" aria-label="add" size="small" onClick={onClick}>
      <AddIcon />
    </Fab>
  </Box>
);

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
