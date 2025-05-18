import styled, { css } from 'styled-components';

const baseStyles = css`
  margin-bottom: 8px;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const FirstHeading = styled.h1`
  ${baseStyles}
`;

export const SecondHeading = styled.h2`
  ${baseStyles}
`;
