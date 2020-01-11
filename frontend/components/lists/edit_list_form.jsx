import React from 'react';
import ListForm from './list_form';

class EditListForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchList(this.props.list.id)
    }

    render() {
        if (!this.props.list) return null
        return (
            <ListForm
                action={this.props.action}
                formType={this.props.formType}
                list={list}
            />
        )

    }

};

export default EditListForm;