import './App.css'

//components
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import ConcludeForm from './components/ConcludeForm'

//hooks
import useStep from './hooks/useStep'

function App() {

  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <ConcludeForm />
  ]

  const {currentStep, currentForm, changeStep, isFirstStep, isLastStep} = useStep(formComponents)

  return (
    <div className="App">
      <header>
        <h1>Deixe sua avaliação</h1>
        <p>Ficamos felizes com sua compra. Utilize o formulário abaixo para avaliar o produto.</p>
      </header>
      <main>
        <form onSubmit={(e)=>{changeStep(currentStep + 1, e)}}>
          {currentForm}
          {!isFirstStep && (
            <button 
              type='button' 
              onClick={()=>{changeStep(currentStep - 1)}}>
                <span>Voltar</span>
            </button>
          )}
          <button type='submit'>
            {isLastStep? (
              <span>Enviar</span>
            ):(
              <span>Próximo</span>
            )}
          </button>
        </form>
      </main>
    </div>
  )
}

export default App
