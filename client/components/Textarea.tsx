import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { UserReview, UserReviewField } from '../domain/review/review.types';
import { ErrorMessage } from './ErrorMessage';

const StyledTextarea = styled.textarea`
  border-radius: 15px;
  width: 100%;
  height: 150px;
  background-color: var(--ice);
  border: 1px solid var(--syphon);
  font-size: 16px;
  padding: 8px;
`;

interface Props {
  register: UseFormRegister<UserReview>;
  name: UserReviewField;
  errors: FieldErrors<UserReview>;
  placeholder: string;
}

export const Textarea = ({ register, name, errors, placeholder }: Props) => {
  return (
    <>
      <StyledTextarea
        placeholder={placeholder}
        {...register(name, {
          required: 'Please leave your review',
          minLength: {
            value: 50,
            message: 'Please ensure the text is at least 50 characters',
          },
        })}
      />
      {typeof errors[name]?.message === 'string' && (
        <ErrorMessage content={errors[name]?.message} />
      )}
    </>
  );
};
