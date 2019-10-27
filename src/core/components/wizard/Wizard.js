import React from "react";
import autoBind from '../../utils/auto-bind'
import PropTypes from "prop-types";

import Navigation from '../../components/navigation';
import { wizardActions, steps, stepMapping } from '../../constants/comman';

export default class Wizard extends React.Component {

    constructor(props) {
        super(props);
        const { wizardContext } = this.props;
        this.state = {
            wizardContext,
            wizardActions,
            errorObj: {}
        };

        autoBind(this);
    }

    handleComplete () {
        const { wizardContext } = this.state;
        const { onComplete } = this.props;
        onComplete(wizardContext);
        setTimeout(() => {
            this.props.history.push('/label')
        }, 100);
    }

    handleFilter(event) {
        const { from, to, weight, shipping } = stepMapping;

        const typeOfComponenent = event.target.getAttribute("data-step");
        if (
          typeOfComponenent === from ||
          typeOfComponenent === to
        ) {
          this.handleNested(event);
        }  else if (
          typeOfComponenent === weight ||
          typeOfComponenent === shipping
        ) {
          this.handleState(event);
        }
    }

    handleNested(event) {
        const key = event.target.getAttribute("data-id"),
          stage = event.target.getAttribute("data-step"),
          value = event.target.value;
        this.setState(prevState => ({
          ...prevState,
          wizardContext: {
            ...prevState.wizardContext,
            [stage]: {
              ...prevState.wizardContext[stage],
              [key]: value
            }
          }
        }));
    }

    handleState(event) {
        const { wizardContext } = this.state;

        const key = event.target.getAttribute("data-id"),
          value = event.target.value;
        this.setState({
          wizardContext: { ...wizardContext, [key]: value }
        });
    }

    onNext () {
        const { wizardActions: { prev, next, curr } } = this.state;
        this.setState({
            wizardActions: {
                prev: prev+1,
                curr: curr+1,
                next: next+1
            }
        })
    }

    onPrev () {
        const { wizardActions: { prev, next, curr } } = this.state;
        this.setState({
            wizardActions: {
                prev: prev-1,
                curr: curr-1,
                next: next-1
            }
        })
    }

    getStepComponentName () {
        const { wizardActions: { curr } } = this.state;
        const { steps: stepsComponents } = this.props;
        const step = steps.find( ({index}) => index === curr );
        return stepsComponents[step.index];
    }

    render() {
        const { header: Header } = this.props;
        const { wizardActions: { prev, next, curr }, wizardContext } = this.state;
        const StepComponent = this.getStepComponentName();
        return (
            <div className='container'>
                <div className='page-header'> 
                    <Header />
                </div>

                <div className="step-container">
                    <StepComponent 
                         onAction={this.handleFilter}
                         wizardContext={wizardContext}
                    />
                </div>

                {
                    (curr === 4) && <button
                        type='button'
                        onClick={this.handleComplete}
                    >
                        Confim
                    </button>
                } 

                <Navigation
                    showPrev={!(prev<0)}
                    showNext={!(next>4)}
                    next={this.onNext}
                    prev={this.onPrev}
                />

            </div>
            
        );
    }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};
