import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { UserReview, UserReviewField } from '../domain/review/review.types';
import { ErrorMessage } from './ErrorMessage';

interface Props {
  register: UseFormRegister<UserReview>;
  name: UserReviewField;
  type: string;
  placeholder?: string;
  errors: FieldErrors<UserReview>;
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
      {typeof errors[name]?.message === 'string' && (
        <ErrorMessage content={errors[name]?.message} />
      )}
    </>
  );
};
