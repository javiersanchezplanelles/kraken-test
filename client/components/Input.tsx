import styled, { css } from 'styled-components';

interface Props {
  type: string;
  isDisabled: boolean;
}

const SharedStyles = css`
  display: block;
  max-width: 200px;
  width: 100%;
  background-color: var(--sohoLights);
  color: var(--siphon);
  border-radius: 15px;
  padding: 15px 0;
  font-family: Gotham;
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-align: center;

  &:disabled {
    background-color: var(--purpleHaze);
    color: white;
    cursor: auto;
  }
`;

const StyledInput = styled.input`
  ${SharedStyles}
`;

export const Input = ({ type, isDisabled }: Props) => {
  return <StyledInput type={type} disabled={isDisabled} />;
};
