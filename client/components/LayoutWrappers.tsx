import styled from 'styled-components';

export const FlexColumnWrapper = styled.div`
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

export const ContentBlockWrapper = styled.div`
  padding: 20px;
  background-color: var(--hemocyanin);
`;

export const TopContentWrapper = styled.div`
  padding: 0 20px;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const MobileMarginTop = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
