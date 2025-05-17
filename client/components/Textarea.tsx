import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  border-radius: 15px;
  width: 100%;
  height: 150px;
  background-color: var(--ice);
  border: 1px solid var(--syphon);
  font-size: 16px;
`;

interface Props {
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: FieldErrors<FieldValues>;
}

export const Textarea = ({ register, name, errors }: Props) => {
  return (
    <>
      <StyledTextarea
        {...register(name, {
          required: 'Please fill out this field',
          minLength: {
            value: 50,
            message: 'Please ensure the text is at least 50 characters.',
          },
        })}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </>
  );
};
