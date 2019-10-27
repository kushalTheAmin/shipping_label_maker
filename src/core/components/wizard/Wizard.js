import React from "react";
import autoBind from '../../utils/auto-bind'
// import PropTypes from "prop-types";

export default class Wizard extends React.Component {

    constructor(props) {
        super(props);
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
        return (
            <div> in Wizard.. 
                <button
                    type='button'
                    onClick={this.handleComplete}
                >
                click to onComplete
                </button>

            </div>
            
        );
    }
}

// Wizard.propTypes = {
//   header: PropTypes.func.isRequired,
//   steps: PropTypes.array.isRequired,
//   wizardContext: PropTypes.object.isRequired,
//   onComplete: PropTypes.func.isRequired
// };
