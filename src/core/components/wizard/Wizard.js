import React from "react";
import autoBind from '../../utils/auto-bind'
import PropTypes from "prop-types";

import Navigation from '../../components/navigation';
import { wizardActions, steps } from '../../constants/comman';

export default class Wizard extends React.Component {

    constructor(props) {
        super(props);
        const { wizardContext } = this.props;
        this.state = {
            wizardContext: wizardContext,
            wizardActions,
            errorObj: {}
        };

        autoBind(this);
    }

    handleComplete () {
        console.log(this.props)
        const { onComplete } = this.props;
        onComplete();
        setTimeout(() => {
            this.props.history.push('/label')
        }, 100);
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
        const { wizardActions: { prev, next, curr } } = this.state;
        const StepComponent = this.getStepComponentName();
        return (
            <div className='container'>
                <div className='page-header'> 
                    <Header />
                </div>

                <div className="step-container">
                    <StepComponent />
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
