import {useState} from 'react'

function useStep(steps) {

    const [currentStep, setCurrentStep] = useState(0)

  return {
    currentStep,
    currentForm: steps[currentStep],
  }
}

export default useStep