import Image from 'next/image';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

interface Props {
  imageUrl: string;
}

export const ProductImage = ({ imageUrl }: Props) => {
  return (
    <ImageWrapper>
      <Image
        alt='Product'
        src={imageUrl}
        layout='responsive'
        width={300}
        height={300}
        style={{ borderRadius: '15px' }}
        priority
      />
    </ImageWrapper>
  );
};
