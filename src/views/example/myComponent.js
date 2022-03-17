import React from "react"
import AddComponent from "./addComponent"
import ChildComponent from "./childComponent"


class MyComponent extends React.Component {
    state = {

        arrayJobs: [
            { id: 'abcJob1', title: 'developer', salary: 500 },
            { id: 'abcJob2', title: 'tester', salary: 800 },
            { id: 'abcJob3', title: 'CEO', salary: 600 }


        ]

    }

    addNewJobs = (job) => {
        console.log(job)
        this.setState({
            arrayJobs: [...this.state.arrayJobs, job]
        })
    }
    handleDelete = (e) => {
        const deleteId = e.target.getAttribute('data-id')

        const listJobs = [...this.state.arrayJobs]

        listJobs.splice(deleteId, 1)
        this.setState({ arrayJobs: listJobs })

    }


    render() {
        console.log('render')
        return (<>

            <AddComponent addNewJobs={this.addNewJobs}  ></AddComponent>

            <ChildComponent
                jobs={this.state.arrayJobs}
                handleDelete={this.handleDelete}
            ></ChildComponent>
        </>)
    }
}

export default MyComponent
