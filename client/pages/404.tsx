import { CtaButton } from '../components/CtaButton';
import { Layout } from '../components/Layout';
import { APP_ROUTES } from '../domain/routes/routes.constants';

const Custom404 = () => (
  <Layout>
    <h1>Oops, we could not find what you were looking for</h1>
    <CtaButton text='Back home' href={APP_ROUTES.HOME} />
  </Layout>
);

export default Custom404;
