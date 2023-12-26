import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, List, Btn, IconWrapper } from './Feedback.styled';
import { Icons } from './Icons';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      <List>
        {options.map((option, index) => (
          <Btn key={index} onClick={() => onLeaveFeedback(option)}>
            <IconWrapper>{React.createElement(Icons[option])}</IconWrapper>
            {option}
          </Btn>
        ))}
      </List>
    </Wrapper>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
