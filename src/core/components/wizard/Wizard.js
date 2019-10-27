import React from "react";
import autoBind from '../../utils/auto-bind'
import PropTypes from "prop-types";

export default class Wizard extends React.Component {

    constructor(props) {
        super(props);
        const { wizardContext } = this.props;
        this.state = {
            showPreviousBtn: false,
            showNextBtn: true,
            showConfirm: false,
            compState: 1, //our starting step
            showNavigation: true,
            wizardContext: wizardContext,
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

    render() {
        const { header: Header } = this.props;
        return (
            <div className='container'>
                <div className='page-header'> 
                    <Header />
                </div>

                <div className="step-container">

                </div>
                <button
                    type='button'
                    onClick={this.handleComplete}
                >
                    Confim
                </button>

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
