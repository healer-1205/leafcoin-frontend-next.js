import Layout from 'components/Layout';
import * as React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import VestingSection from 'components/Vesting';

const Vesting: NextPage = () => {
  return (
    <Layout className="app-section mx-auto flex w-full flex-col items-center space-y-6 bg-gray-500 pt-12 pb-8 dark:bg-lp-gray-8">
      <VestingSection />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  // Pass data to the page via props
  return {
    props: {
      messages: (await import(`translations/${locale}.json`)).default,
    },
  };
};

export default Vesting;
