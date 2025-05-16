import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { ContentBlock } from './ContentBlock';
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
  name: string;
  content: string;
}

export const ProductReview = () => {
  const [userReviews, setUserReviews] = useState<UserReview[]>([
    {
      name: 'John Garcia',
      content: 'I am so in love with this product!',
    },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    const newReview = {
      name: 'Anonymous',
      content: data.review,
    };

    setUserReviews((prev) => [...prev, newReview]);
    reset();
  };

  return (
    <FlexColumnWrapper>
      <TopContentWrapper>
        <Heading>Customer feedback</Heading>
        <ReviewForm
          handleOnSubmit={handleSubmit(onSubmit)}
          name='review'
          register={register}
          isValid={isValid}
        />
      </TopContentWrapper>
      <ContentBlockWrapper>
        {userReviews.map((review) => (
          <ContentBlock
            key={review.name}
            heading={review.name}
            content={review.content}
          />
        ))}
      </ContentBlockWrapper>
    </FlexColumnWrapper>
  );
};
