import React from 'react';

class BoardFrom extends React.Component {
    constructor(props) {
        super(props)
        this.state=this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.action(this.state)
    }

    onChange(field) {
        return (e) => {
            this.setState(
                {[field]: e.target.value}
            )
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.onChange('title')} />
                    </label>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default BoardFrom;