import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface Props {
  handleOnSubmit: (e?: React.BaseSyntheticEvent) => void;
  register: UseFormRegister<FieldValues>;
  name: string;
  isValid: boolean;
}

export const ReviewForm = ({
  handleOnSubmit,
  register,
  name,
  isValid,
}: Props) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <Textarea register={register} name={name} />
      <Input type='submit' isDisabled={!isValid} />
    </form>
  );
};
