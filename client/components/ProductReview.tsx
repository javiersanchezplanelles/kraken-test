import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { UserReview } from '../domain/review/review.types';
import { Review } from './Review';
import { ReviewForm } from './ReviewForm';

const basePadding = css`
  padding: 20px;
`;

const Heading = styled.h1`
  margin-bottom: 8px;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const FlexColumnWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    width: 70%;
  }

  @media (min-width: 1400px) {
    width: 40%;
  }
`;

const ContentBlockWrapper = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TopContentWrapper = styled.div`
  ${basePadding}
  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const ProductReview = () => {
  const [editReviewIndex, setEditReviewIndex] = useState<number | null>(null);
  const [userReviews, setUserReviews] = useState<UserReview[] | null>([]);

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
    setUserReviews(userReviews.filter((_, index) => index !== reviewIndex));
  };

  return (
    <FlexColumnWrapper>
      <TopContentWrapper>
        <Heading>Customer feedback</Heading>
        <ReviewForm
          handleOnSubmit={handleSubmit(onSubmit)}
          textareaName='review'
          inputName='author'
          register={register}
          errors={errors}
        />
      </TopContentWrapper>
      <ContentBlockWrapper>
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
      </ContentBlockWrapper>
    </FlexColumnWrapper>
  );
};
