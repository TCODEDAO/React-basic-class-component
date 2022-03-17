import React from "react"

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",

    }
    handleChangeFirstName = (e) => {

        this.setState({ title: e.target.value })

    }
    handleChangeLastName = (e) => {
        this.setState({ salary: e.target.value })


    }
    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Jobs:</label><br />
                <input type="text" value={this.state.title} onChange={(e) => this.handleChangeFirstName(e)}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(e) => this.handleChangeLastName(e)} /><br /><br />
                <input type="submit" value="Submit" onClick={e => {
                    e.preventDefault()
                    if (!this.state.title || !this.state.title) {
                        alert('missing')
                        return
                    }
                    this.props.addNewJobs({
                        id: Math.floor(Math.random() * 100),
                        title: this.state.title,
                        salary: this.state.salary

                    })
                    this.setState({
                        title: '',
                        salary: ''
                    })

                }} />
            </form>
        )
    }
}

export default AddComponent

