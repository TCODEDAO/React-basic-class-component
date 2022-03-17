import React, { Component } from 'react'
import AddTodo from './addTodo'

import './ListTodos'
export default class ListTodos extends Component {
    state = {
        ListTodos: [
            {
                title: 'Fucking busy'
            },
            { title: 'Buy new sweatshirt' }
        ],
        isShowCreate: false
    }


    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, { title: todo }]
        })
    }
    render() {
        return (
            <div className="Todos">
                <div className="Todos__Content">
                    <div className="Todos__Time">
                        <div className="Todos__Time--mdy">
                            <div className="date">12</div>
                            <div className="month">JAN</div>
                            <div className="year">2016</div>
                        </div>
                        <div className="Todos__Time--days">TUESDAY</div>
                    </div>
                    <div className="Todos__Work">
                        <ul className="Todos__Work--list">
                            {this.state.ListTodos.map((Todo, index) => {
                                return (<li className="Todos__Work-element" key={index} >
                                    <label htmlFor={index}>
                                        <p className="Todos__Work--content">{index + 1}. {Todo.title}</p>
                                    </label> <input type="checkbox" id={index} className="checkbox-todos" /> <label className="checkmark"
                                        htmlFor={index}></label>
                                    <button className='EditBtn'>✍ </button>
                                    <button className='DeleteBtn'>🗑️</button>
                                </li>)
                            })}


                        </ul>
                    </div>
                    {this.state.isShowCreate == true ? <AddTodo addNewTodo={this.addNewTodo}></AddTodo> : <React.Fragment></React.Fragment>}
                    <div className="Todos__Button" onClick={() => {
                        const TodosBtn = document.querySelector('.Todos__Button')
                        const TodosBtnSymbol = document.querySelector('.Todos__Button--symbol')

                        TodosBtn.onclick = (e) => {

                            if (TodosBtnSymbol.classList.contains('animateRotateClose')) {
                                setTimeout(() => {
                                    TodosBtnSymbol.style.transform = 'rotate(0)'
                                }, 200)
                                TodosBtnSymbol.classList.remove('animateRotateClose')
                                TodosBtnSymbol.classList.add('animateRotateOpen')



                                this.setState({ isShowCreate: false })
                                return
                            } else {
                                this.setState({ isShowCreate: true })

                                TodosBtnSymbol.classList.add('animateRotateClose')
                                setTimeout(() => {
                                    TodosBtnSymbol.style.transform = 'rotate(0)'
                                }, 200)
                                TodosBtnSymbol.classList.remove('animateRotateOpen')



                            }



                        }
                    }}>
                        <div className="Todos__Button--symbol noselect">+</div>
                    </div>
                </div>

            </div>

        )
    }
}
