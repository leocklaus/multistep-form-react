import {useState} from 'react'

function useStep(steps) {

    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e){

      if(e){
        e.preventDefault()
      } 
      
      if(i >= 0 && i <=2){
        setCurrentStep(i)
      }

    }

  return {
    currentStep,
    currentForm: steps[currentStep],
    changeStep,
    isFirstStep: currentStep === 0 ? true : false,
    isLastStep: currentStep === 2? true : false,
  }
}

export default useStep