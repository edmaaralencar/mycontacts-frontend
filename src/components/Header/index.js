import * as S from './styles';

import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <S.Container>
      <img src={logo} alt="Logo" width="201" />
    </S.Container>
  );
}

export default Header;
