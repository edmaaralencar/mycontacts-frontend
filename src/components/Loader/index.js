import ReactDOM from 'react-dom';
import * as S from './styles';

function Loader() {
  return ReactDOM.createPortal(
    <S.Overlay>
      <div className="loader" />
    </S.Overlay>,
    document.getElementById('loader-root'),
  );
}

export default Loader;
