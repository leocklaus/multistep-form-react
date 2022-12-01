import './App.css'

//components
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import ConcludeForm from './components/ConcludeForm'

//hooks
import useStep from '../hooks/useStep'

function App() {

  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <ConcludeForm />
  ]

  const {currentStep, currentForm} = useStep(formComponents)

  return (
    <div className="App">
      <header>
        <h1>Deixe sua avaliação</h1>
        <p>Ficamos felizes com sua compra. Utilize o formulário abaixo para avaliar o produto.</p>
      </header>
      <main>
        <form>
          {currentForm}
          <button type='button'>Voltar</button>
          <button type='submit'>Próximo</button>

        </form>
      </main>
    </div>
  )
}

export default App
