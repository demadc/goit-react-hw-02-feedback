import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
`;

export const Title = styled.h1`
  color: blueviolet;
  margin-top: 16px;
  margin-bottom: 16px;
`;
