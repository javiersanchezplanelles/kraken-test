import Image from 'next/image';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  height: 100%;
`;

interface Props {
  productsOnCart: number;
}

export const Header = ({ productsOnCart }: Props) => {
  return (
    <HeaderWrapper>
      <Image src='/octopus-logo.svg' width={150} height={150} />
      <span title='Basket items'>{productsOnCart}</span>
      <Image src='/basket.svg' width={30} height={30} />
    </HeaderWrapper>
  );
};
