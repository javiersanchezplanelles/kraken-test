import styled from 'styled-components';
import { CtaButton } from '../components/CtaButton';
import { Layout } from '../components/Layout';
import { APP_ROUTES } from '../domain/routes/routes.constants';

const Custom404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  text-align: center;

  a {
    max-width: 200px;
  }
`;

const Custom404 = () => (
  <Layout>
    <Custom404Wrapper>
      <h1>Oops, we could not find what you were looking for</h1>
      <CtaButton text='Back home' href={APP_ROUTES.HOME} />
    </Custom404Wrapper>
  </Layout>
);

export default Custom404;
