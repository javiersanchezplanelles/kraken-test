import styled from 'styled-components';

interface Props {
  content: string;
}

const StyledText = styled.p`
  color: red;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const ErrorMessage = ({ content }: Props) => {
  return <StyledText>{content}</StyledText>;
};
