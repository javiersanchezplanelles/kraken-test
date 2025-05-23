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

  &:disabled {
    background-color: var(--purpleHaze);
    color: white;
    cursor: auto;
  }
`;

const LinkWrapper = styled.div`
  max-width: 200px;
  width: 100%;

  a {
    text-decoration: none;
    ${SharedStyles};
  }
`;

interface Props {
  text: string;
  handleClick?: () => void;
  href?: string;
  isDisabled?: boolean;
}

export const CtaButton = ({ text, handleClick, href, isDisabled }: Props) => {
  return href ? (
    <LinkWrapper>
      <Link href={href}>{text}</Link>
    </LinkWrapper>
  ) : (
    <StyledButton onClick={handleClick} disabled={isDisabled}>
      {text}
    </StyledButton>
  );
};
