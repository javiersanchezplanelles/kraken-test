import styled from 'styled-components';

interface Props {
  heading: string;
  content: string;
}

const Heading = styled.h2`
  font-weight: 500;
  margin-top: 0;
`;

const Text = styled.p`
  line-height: 1.7;
  font-weight: 300;
`;

const ContentBlockWrapper = styled.div`
  padding: 20px;
  background-color: var(--hemocyanin);
`;

export const ContentBlock = ({ heading, content }: Props) => {
  return (
    <ContentBlockWrapper>
      <Heading>{heading}</Heading>
      <Text>{content}</Text>
    </ContentBlockWrapper>
  );
};
