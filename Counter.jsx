class Counter extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                count: 0
            };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);    
        }
        reset() {
            this.setState({
                count: 0
            });
        }

        increment() {
            this.setState(state => ({
                count: state.count + 1
            }));
        }

        decrement() {
            this.setState(state => ({
                count: state.count - 1
            }));
        }

        render() {
            return (
                <div>
                    <button className='inc-up' onClick={this.increment}>
                        UP
                    </button>

                    <button className='dec-down' onClick = {this.decrement}>
                        DOWN
                    </button>

                    <button className='reset' onClick = {this.reset}>
                        RESET!
                    </button>
                </div>
            );
        }
    };
