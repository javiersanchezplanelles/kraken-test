import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface Props {
  register: UseFormRegister<FieldValues>;
  name: string;
  type: string;
  placeholder?: string;
  errors: FieldErrors<FieldValues>;
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

export const Input = ({ register, name, type, placeholder, errors }: Props) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: 'Please fill out this field',
        })}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </>
  );
};
