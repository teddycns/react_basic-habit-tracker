import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    // 외부 props를 전달받아 보여주기만 하는 component 

    //lifeCycle
    componentDidUpdate(){ //mount
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount(){ //unmount
        console.log(`habit: ${this.props.habit.name} will unmount`);
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        const { name, count } = this.props.habit; /* habits.jsx에서 habit props에 전달한 데이터를 가져옴 */
        console.log(`habit:  ${name}`);
        return (
           <div> <li className='habit'>
                <span className="habit-name">{name}</span>   {/* name = this.props.habit.name */}
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={() => this.props.onIncrement(this.props.habit)}> {/*이 코드와 this.handleIncrement 이 코드 결과는 동일*/}
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li></div> 
        );
    }
}

export default Habit;



