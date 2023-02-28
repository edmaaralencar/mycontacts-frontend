import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

function PageHeader({ title }) {
  return (
    <S.Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </S.Container>
  );
}

export default PageHeader;

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
