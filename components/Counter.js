var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counterBox'},
                React.createElement('span', {}, this.state.counter),
                React.createElement('button', {type: 'submit', onClick: this.increment}, '+'),
                React.createElement('button', {type: 'submit', onClick: this.decrement}, "-")
        );
    }
});