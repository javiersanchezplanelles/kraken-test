import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: auto;
  padding: 25px 20px;
  color: var(--purpleHaze);
  background-color: var(--hemocyanin);
`;

const Text = styled.p`
  font-size: 12px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Text>
        Octopus Energy Ltd is a company registered in England and Wales.
        Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
        2HT. Trading office: 20-24 Boradwick Street, London, W1F 8HT
      </Text>
    </FooterWrapper>
  );
};
