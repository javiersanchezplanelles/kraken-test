import styled from 'styled-components';
import { ContentBlockWrapper } from './LayoutWrappers';

const Heading = styled.h2`
  font-weight: 500;
  margin-top: 0;
`;

const Text = styled.p`
  line-height: 1.7;
  font-weight: 300;
`;

interface Props {
  heading: string;
  content: string;
}

export const ContentBlock = ({ heading, content }: Props) => {
  return (
    <ContentBlockWrapper>
      <Heading>{heading}</Heading>
      <Text>{content}</Text>
    </ContentBlockWrapper>
  );
};
