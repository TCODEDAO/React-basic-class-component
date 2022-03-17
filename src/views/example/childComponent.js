import React from "react"
import './demo.css'
class ChildComponent extends React.Component {
    state = {
        showList: false,
    }
    handleShowHide = (e) => {
        this.setState({ showList: !this.state.showList })
    }

    render() {
        const { jobs, handleDelete } = this.props

        return (
            <>
                {this.state.showList === true ? (
                    <ul>
                        {jobs.map((job, index) => {
                            return (
                                <li key={index}>
                                    {" "}
                                    <p style={{ display: "inline-block" }}>
                                        {" "}
                                        Name: {job.title} Salary: {job.salary}
                                    </p>{" "}
                                    <button
                                        style={{
                                            outline: "red",
                                            display: "inline-block",
                                            cursor: "pointer",
                                        }}
                                        className="button type1"
                                        data-id={index}
                                        onClick={(e) => {
                                            this.props.handleDelete(e)
                                        }}

                                    >
                                        &#10006;
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div></div>
                )}
                {this.state.showList === false ? (
                    <button
                        onClick={(e) => {
                            this.handleShowHide(e)
                        }}
                    >
                        Show
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            this.handleShowHide(e)
                        }}
                    >
                        Hide
                    </button>
                )}
            </>
        )
    }
}

export default ChildComponent
