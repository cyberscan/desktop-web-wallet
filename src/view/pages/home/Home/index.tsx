import React, { useCallback, FC } from 'react';
import { Button } from 'reactstrap';
import Particles from 'react-particles-js';
import { PARTICLES_PARAMS } from '~/constants/particles';
import * as styles from './styles.module.scss';
import { Layout } from '~/view/components/layout/Layout';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const Home: FC<{}> = () => {
  return (
    <Layout noFooter>
      <div className={styles.banner}>
        <h2 className={styles.slogan}>Operachain Powered Wallet</h2>

        <h3 className={styles.subtitle}>Send and Receive FTM</h3>

        <div className={styles.buttons}>
          <Link className={styles.rounded} to="/account/create">
            Create Wallet
          </Link>

          <Link className={styles.rounded} to="http://fantom.foundation/" target="_blank">
            Learn More
          </Link>
        </div>
      </div>

      <Particles params={PARTICLES_PARAMS} className={styles.particles} />
    </Layout>
  );
};

// Home.propTypes = {
//   history: PropTypes.oneOfType([PropTypes.object]).isRequired,
// };

export default Home;
