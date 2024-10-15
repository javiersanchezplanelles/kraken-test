import Image from 'next/image';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Image src='/octopus-logo.svg' width={150} height={150} />
      <Image src='/basket.svg' width={30} height={30} />
    </HeaderWrapper>
  );
};
