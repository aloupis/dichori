import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeaderItem from './HeaderItem';
import AddButton from '../../../common/AddButton';

const HeaderItemContainer = ({ item, onAddItem, onEditItem, onDeleteItem }) => (
  <Accordion>
    <AccordionSummary
      style={{ backgroundColor: '#f5f5f5' }}
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <HeaderItem
        item={item}
        onAddItem={onAddItem}
        onEditItem={onEditItem}
        onDeleteItem={onDeleteItem}
      />
    </AccordionSummary>
    {item.items.map((i, index) => (
      <AccordionDetails key={index}>
        <HeaderItem
          item={i}
          onAddItem={onAddItem}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
        />
      </AccordionDetails>
    ))}
    <AddButton onClick={() => onAddItem(item.id)} />
  </Accordion>
);

HeaderItemContainer.propTypes = {
  item: PropTypes.object,
  onAddItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

export default HeaderItemContainer;
