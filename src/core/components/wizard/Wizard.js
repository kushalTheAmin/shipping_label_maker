import React from "react";
import autoBind from '../../utils/auto-bind'
import PropTypes from "prop-types";

import Navigation from '../../components/navigation';
import ProgressBar from '../../components/progressbar';
import { wizardActions, steps, stepMapping } from '../../constants/comman';

import { validatorObj } from "../../utils/errorCheck";

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
        const { wizardContext } = this.state;

        const typeOfComponenent = event.target.getAttribute("data-step");
        if (
          typeOfComponenent === from ||
          typeOfComponenent === to
        ) {
          this.handleNested(event);
        }  else if (
          typeOfComponenent === weight ||
          typeOfComponenent === shipping
        )  
        {
          this.handleState(event);
        } else if (typeOfComponenent === stepMapping.confirm) {
            this.handleComplete(wizardContext);
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

    getStepComponentName () {
        const { wizardActions: { curr } } = this.state;
        const { steps: stepsComponents } = this.props;
        const step = steps.find( ({index}) => index === curr );
        return stepsComponents[step.index];
    }

    getStepComponentApi () {
        const { wizardActions: { curr } } = this.state;
        const step = steps.find( ({index}) => index === curr );
        return step.api;
    }

    onNext () {
        const { wizardActions: { prev, next, curr }, wizardContext } = this.state;

        this.setState({
            errorObj: {}
          });
          if (validatorObj[curr]) {
              console.log(this.getStepComponentApi());
            const errors = validatorObj[curr](
              wizardContext[this.getStepComponentApi()]
            );
            if (Object.keys(errors).length) {
              this.setState({
                errorObj: errors
              });
              return false;
            }
        }

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

    render() {
        const { header: Header } = this.props;
        const { wizardActions: { prev, next, curr }, wizardContext, errorObj } = this.state;
        const StepComponent = this.getStepComponentName();
        return (
            <div className='container'>
                <div className='page-header'> 
                    <Header />
                </div>

                <ProgressBar
                    step={curr+1}
                    length={5}
                />

                <div className="step-container">
                    <StepComponent 
                         onAction={this.handleFilter}
                         wizardContext={wizardContext}
                    />
                </div>

                <Navigation
                    showPrev={!(prev<0)}
                    showNext={!(next>4)}
                    next={this.onNext}
                    prev={this.onPrev}
                />

                {Object.keys(errorObj).length>0 && (
                    <div className="alert alert-danger">
                     {Object.keys(errorObj).map((key, index) => {
                        const error =
                            key === "state"
                            ? "You need two letters for state"
                            : "You have " + key + " error";
                        return <p key={index}> {error} </p>;
                    })}
                    </div>
                )}

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
