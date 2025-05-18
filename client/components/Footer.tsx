import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: 8px;
  padding: 25px 20px;
  color: var(--purpleHaze);
  background-color: var(--hemocyanin);
  line-height: 1.5;
`;

const Text = styled.p`
  font-size: 12px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Text>We are a registered company operating in the EU.</Text>
    </FooterWrapper>
  );
};
