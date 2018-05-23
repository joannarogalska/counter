var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(Counter),
                React.createElement(Counter1)
            )
        );
    }
});