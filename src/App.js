import Paragraph from './components/paragraph/paragraph';
import Button from './components/Button/button';

function App() {
  return (
    <>
      <Button label="Baixar CV"/>
      <Button label="Enviar CV"/>
      <Paragraph content='Paragrafo texto vermelho.' pColor = 'red'/>
      <Paragraph content='Paragrafo texto verde.' pColor = 'green'/>
      <Paragraph content='Paragrafo texto azul.' pColor = 'blue'/>
    </>
  );
}

export default App;
