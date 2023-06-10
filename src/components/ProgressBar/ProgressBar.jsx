import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ProgressBar(props) {
  const getStepClass = (step) => {
    let stepClass = `step step_${step}`;

    if (props.currentStep === step) {
      stepClass += ' active';
    } else if (props.currentStep > step) {
      stepClass += ' valid';
    }

    return stepClass;
  };

  const getIconClass = (step) => {
    let iconClass = 'fa fa-check';

    if (props.currentStep < step) {
      iconClass += ' opaque';
    }

    return iconClass;
  };

  const getIconContent = (step) => {
    if (props.currentStep > step) {
      return <FontAwesomeIcon icon={faCheck} />;
    } else {
      return <span>{step}</span>;
    }
  };

  const handleSubmit = () => {
    // Implementa la lógica para el manejo de la función handleSubmit
  };

  return (
    <>
      <div className={`step_${props.currentStep}`} id="checkout_progress">
        <div className="progress_bar">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={getStepClass(step)}>
              <div className="step_icon">{getIconContent(step)}</div>
              <div className="step_label">
                {step === 1 && 'Usuario'}
                {step === 2 && 'Envio'}
                {step === 3 && 'Opcionales'}
                {step === 4 && 'Confirmar'}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br /><br /><br />
      {props.children && (
        <div className={`section${props.currentStep}`}>
          {React.Children.map(props.children, (child, index) =>
            React.cloneElement(child, {
              key: index,
              style: {
                display: props.currentStep === index + 1 ? 'block' : 'none',
              },
              currentStep: props.currentStep,
            })
          )}
        </div>
      )}
      
    </>
  );
}

export default ProgressBar;
