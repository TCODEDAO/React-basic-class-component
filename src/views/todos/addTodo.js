import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {

    }
    handleInputValue = (e) => {
        this.setState({ title: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewTodo(this.state.title)
    }
    render() {

        return (
            <div className="Todos__Create">

                <form action="">
                    <input type="text" name="" id="" onChange={(e) => {
                        this.handleInputValue(e)
                    }} />
                    <input type="submit" value="create" onClick={e => this.handleSubmit(e)} />
                </form>

            </div>
        )
    }
}
