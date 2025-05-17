import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
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

interface UserReview {
  author: string;
  content: string;
  date: string;
}

export const ProductReview = () => {
  const [editReviewIndex, setEditReviewIndex] = useState<number | null>(null);
  const [userReviews, setUserReviews] = useState<UserReview[] | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    const todayDate = new Date().toLocaleDateString();
    const newReview = {
      author: data.author,
      content: data.review,
      date: todayDate,
    };

    if (editReviewIndex !== null) {
      setUserReviews((prev) =>
        prev.map((review, index) =>
          index === editReviewIndex ? newReview : review
        )
      );
      setEditReviewIndex(null);
    } else {
      if (userReviews) {
        setUserReviews((prev) => [...prev, newReview]);
      } else {
        setUserReviews([newReview]);
      }
    }

    reset();
  };

  const handleOnEdit = (reviewIndex: number) => {
    setValue('review', userReviews[reviewIndex].content, {
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
          isValid={isValid}
        />
      </TopContentWrapper>
      <ContentBlockWrapper>
        {userReviews?.map((review, index) => (
          <Review
            key={review.author}
            author={review.author}
            content={review.content}
            date={review.date}
            onEdit={() => handleOnEdit(index)}
            onDelete={() => handleOnDelete(index)}
          />
        ))}
      </ContentBlockWrapper>
    </FlexColumnWrapper>
  );
};
