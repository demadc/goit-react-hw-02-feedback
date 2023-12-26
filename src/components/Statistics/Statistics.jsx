import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  DescrStatistics,
  Good,
  Neutral,
  Bad,
  Total,
  Percentage,
} from './Statistics.styled';
import {
  HiOutlineHeart,
  HiOutlineThumbDown,
  HiMinusCircle,
} from 'react-icons/hi';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <List>
        <DescrStatistics>
          <li>
            <HiOutlineHeart size="16" />
            <Good>Good:{good}</Good>
          </li>
          <li>
            <HiMinusCircle size="16" />
            <Neutral>Neutral:{neutral}</Neutral>
          </li>
          <li>
            <HiOutlineThumbDown size="16" />
            <Bad>Bad:{bad}</Bad>
          </li>
        </DescrStatistics>
      </List>
      <Total>Total:{total}</Total>
      <Percentage>Positive Feedback:{percentage}%</Percentage>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
