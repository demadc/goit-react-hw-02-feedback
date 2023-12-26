import PropTypes from 'prop-types';
import { Wrapper, List, Btn } from './Feedback.styled';
import { Icons } from './Icons';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      <List>
        {options.map((option, index) => (
          <Btn
            key={index}
            icon={Icons[option]}
            onClick={() => onLeaveFeedback(option)}
          >
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
