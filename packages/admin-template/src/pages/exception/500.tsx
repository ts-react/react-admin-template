import React from 'react';
import { Link, formatMessage } from 'umi';
import Exception from '@/components/exception';

const Exception500: React.FC = () => (
  <Exception
    type="500"
    desc={formatMessage({ id: 'app.exception.description.500' })}
    linkElement={Link}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception500;
