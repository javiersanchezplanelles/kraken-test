import Image from 'next/image';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
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
        src={imageUrl}
        layout='responsive'
        width={300}
        height={300}
        style={{ borderRadius: '15px' }}
      />
    </ImageWrapper>
  );
};
