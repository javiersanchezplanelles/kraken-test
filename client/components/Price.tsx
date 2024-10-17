import styled from 'styled-components';
import { formatPrice } from '../utils/product.utils';

const PriceWrapper = styled.span`
  align-self: flex-end;
`;

interface Props {
  total: number;
}

export const Price = ({ total }: Props) => {
  return <PriceWrapper>{formatPrice(total)}</PriceWrapper>;
};
