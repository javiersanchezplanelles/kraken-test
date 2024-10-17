import styled from 'styled-components';

const Button = styled.button`
  width: 34px;
  background-color: ${(props) =>
    props.disabled ? 'var(--plum)' : 'var(--sohoLights)'};
  color: ${(props) =>
    props.disabled ? 'var(--purpleHaze)' : 'var(--hemocyanin)'};
  border-radius: 12px;
  padding: 8px 0;
  font-family: Gotham;
  font-weight: 600;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Text = styled.p`
  font-size: 12px;
  text-align: center;
  margin: 0 0 4px;
  font-weight: 100;
`;

const CounterWrapper = styled.div`
  max-width: 100px;
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

interface Props {
  currentQuantity: number;
  handleIncreaseClick: () => void;
  handleDecreaseClick: () => void;
}

export const Counter = ({
  currentQuantity,
  handleIncreaseClick,
  handleDecreaseClick,
}: Props) => {
  return (
    <CounterWrapper>
      <Text>Qty</Text>
      <FlexWrapper>
        <Button onClick={handleDecreaseClick} disabled={currentQuantity === 1}>
          -
        </Button>
        <span title='Current quantity'>{currentQuantity}</span>
        <Button onClick={handleIncreaseClick}>+</Button>
      </FlexWrapper>
    </CounterWrapper>
  );
};
