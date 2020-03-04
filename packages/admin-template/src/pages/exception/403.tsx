import React from 'react';
import { Link } from 'umi';
import { formatMessage } from 'umi';
import Exception from '@/components/exception';

const Exception403: React.FC = () => (
  <Exception
    type="403"
    desc={formatMessage({ id: 'app.exception.description.403' })}
    linkElement={Link}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception403;
