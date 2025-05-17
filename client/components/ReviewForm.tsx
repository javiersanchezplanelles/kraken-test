import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { UserReview, UserReviewField } from '../domain/review/review.types';
import { CtaButton } from './CtaButton';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface Props {
  handleOnSubmit: (e?: React.BaseSyntheticEvent) => void;
  register: UseFormRegister<UserReview>;
  textareaName: UserReviewField;
  inputName: UserReviewField;
  errors: FieldErrors<UserReview>;
}

export const ReviewForm = ({
  handleOnSubmit,
  register,
  textareaName,
  inputName,
  errors,
}: Props) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        type='text'
        register={register}
        name={inputName}
        placeholder='Your public name'
        errors={errors}
      />
      <Textarea register={register} name={textareaName} errors={errors} />
      <CtaButton text='Submit' />
    </form>
  );
};
