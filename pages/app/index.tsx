import ApplicationLayout from '@/components/Layout/ApplicationLayout';
import Application from '@/views/App/Application';
import React, { ReactElement } from 'react';

const ApplicationPage = () => {
  return <Application />;
};

ApplicationPage.getLayout = (page: ReactElement) => (
  <ApplicationLayout>{page}</ApplicationLayout>
);

export default ApplicationPage;
