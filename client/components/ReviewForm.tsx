import { FieldValues, UseFormRegister } from 'react-hook-form';
import { CtaButton } from './CtaButton';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface Props {
  handleOnSubmit: (e?: React.BaseSyntheticEvent) => void;
  register: UseFormRegister<FieldValues>;
  textareaName: string;
  inputName: string;
  isValid: boolean;
}

export const ReviewForm = ({
  handleOnSubmit,
  register,
  textareaName,
  inputName,
  isValid,
}: Props) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        type='text'
        register={register}
        name={inputName}
        placeholder='Your public name'
      />
      <Textarea register={register} name={textareaName} />
      <CtaButton text='Submit' isDisabled={!isValid} />
    </form>
  );
};
