import { FieldValues, UseFormRegister } from 'react-hook-form';
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
}

export const Textarea = ({ register, name }: Props) => {
  return (
    <StyledTextarea
      {...register(name, {
        required: true,
        minLength: 50,
      })}
    />
  );
};
