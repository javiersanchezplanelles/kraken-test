import Link from 'next/link';
import styled, { css } from 'styled-components';

const SharedStyles = css`
  display: block;
  width: 100%;
  background-color: var(--sohoLights);
  border-radius: 15px;
  padding: 15px 0;
  font-family: Gotham;
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-align: center;
`;

const StyledButton = styled.button`
  ${SharedStyles}
`;

const StyledLink = styled.a`
  text-decoration: none;
  ${SharedStyles};
`;

interface Props {
  text: string;
  handleClick?: () => void;
  href?: string;
}

export const CtaButton = ({ text, handleClick, href }: Props) => {
  return href ? (
    <Link href={href}>
      <StyledLink>{text}</StyledLink>
    </Link>
  ) : (
    <StyledButton onClick={handleClick}>{text}</StyledButton>
  );
};
