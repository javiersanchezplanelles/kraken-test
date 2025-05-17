import { FieldValues, UseFormRegister } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface Props {
  register: UseFormRegister<FieldValues>;
  name: string;
  type: string;
  isDisabled?: boolean;
  placeholder?: string;
}

const SharedStyles = css`
  max-width: 300px;
  width: 100%;
  color: var(--siphon);
  background-color: var(--ice);
  border-radius: 15px;
  padding: 15px 0;
  font-family: Gotham;
  font-weight: 600;
  border: none;
  text-align: center;
  font-size: 16px;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  ${SharedStyles}
`;

export const Input = ({
  register,
  name,
  type,
  isDisabled,
  placeholder,
}: Props) => {
  return (
    <StyledInput
      type={type}
      disabled={isDisabled}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};
