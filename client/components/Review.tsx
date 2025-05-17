import styled from 'styled-components';
import { localiseDate } from '../domain/date/date.utils';

const Author = styled.h2`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  line-height: 1.7;
  font-weight: 300;
`;

const Date = styled.p`
  line-height: 1.7;
  font-weight: 300;
  font-size: 12px;
  margin-bottom: 8px;
`;

const ContentBlockWrapper = styled.div`
  padding: 20px;
  background-color: var(--hemocyanin);
`;

const StyledButton = styled.button`
  border: none;
  color: var(--siphon);
  background-color: var(--sohoLights);
  border-radius: 15px;
  padding: 12px;
  font-size: 14px;
  margin-right: 4px;
  cursor: pointer;
`;

interface Props {
  author: string;
  content: string;
  date: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const Review = ({ author, content, date, onEdit, onDelete }: Props) => {
  return (
    <ContentBlockWrapper>
      <Author>{author}</Author>
      <Date>{localiseDate(date)}</Date>
      <Text>{content}</Text>
      <StyledButton onClick={onEdit}>Edit</StyledButton>
      <StyledButton onClick={onDelete}>Delete</StyledButton>
    </ContentBlockWrapper>
  );
};
