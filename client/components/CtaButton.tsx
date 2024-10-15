import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: var(--sohoLights);
  border-radius: 15px;
  padding: 15px 0;
  font-family: Gotham;
  font-weight: 600;
  border: none;
`;

interface Props {
  text: string;
  handleClick: () => void;
}

export const CtaButton = ({ text, handleClick }: Props) => {
  return <Button onClick={handleClick}>{text}</Button>;
};
