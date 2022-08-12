import Paragraph from './components/paragraph/paragraph'
import Button from './components/button/button'

function App() {
  return (
    <>
      <Paragraph content='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here
      packages and web page editors now use Lorem Ipsum as their 7efault model text, and a search for' color='green' />

      <Paragraph content='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here
      packages and web page editors now use Lorem Ipsum as their 7efault model text, and a search for' color='blue' />

      <Paragraph content='Este parágrafo tem a cor vermelha padrão' />

      <Button label='Baixar CV'></Button>
    </> 
  );
}

export default App;

