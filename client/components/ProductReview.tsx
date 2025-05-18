import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UserReview } from '../domain/review/review.types';
import {
  FlexColumnWrapper,
  MobileMarginTop,
  TopContentWrapper,
} from './LayoutWrappers';
import { Review } from './Review';
import { ReviewForm } from './ReviewForm';
import { SecondHeading } from './Typography';

const ProductDetailWrapper = styled.div`
  padding-top: 20px;
`;

export const ProductReview = () => {
  const [editReviewIndex, setEditReviewIndex] = useState<number | null>(null);
  const [userReviews, setUserReviews] = useState<UserReview[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserReview>({
    mode: 'onChange',
    defaultValues: {
      author: '',
      review: '',
      date: '',
    },
  });

  const onSubmit: SubmitHandler<UserReview> = (data) => {
    const todayDate = new Date().toLocaleDateString();
    const newReview = {
      id: userReviews.length + 1,
      author: data.author,
      review: data.review,
      date: todayDate,
    };

    setUserReviews((prev) => {
      if (editReviewIndex !== null) {
        return prev.map((review, index) =>
          index === editReviewIndex ? newReview : review
        );
      }
      return [...prev, newReview];
    });

    setEditReviewIndex(null);
    reset();
  };

  const handleOnEdit = (reviewIndex: number) => {
    setValue('author', userReviews[reviewIndex].author, {
      shouldValidate: true,
    });
    setValue('review', userReviews[reviewIndex].review, {
      shouldValidate: true,
    });
    setEditReviewIndex(reviewIndex);
  };

  const handleOnDelete = (reviewIndex: number) => {
    if (editReviewIndex === reviewIndex) {
      reset();
      setEditReviewIndex(null);
    }
    setUserReviews(userReviews.filter((_, index) => index !== reviewIndex));
  };

  return (
    <ProductDetailWrapper>
      <FlexColumnWrapper>
        <TopContentWrapper>
          <SecondHeading>Customer feedback</SecondHeading>
          <ReviewForm
            handleOnSubmit={handleSubmit(onSubmit)}
            textareaName='review'
            inputName='author'
            register={register}
            errors={errors}
          />
        </TopContentWrapper>
        <MobileMarginTop>
          {userReviews?.map((review, index) => (
            <Review
              key={review.id}
              author={review.author}
              content={review.review}
              date={review.date}
              onEdit={() => handleOnEdit(index)}
              onDelete={() => handleOnDelete(index)}
            />
          ))}
        </MobileMarginTop>
      </FlexColumnWrapper>
    </ProductDetailWrapper>
  );
};
