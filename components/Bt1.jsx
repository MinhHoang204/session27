import React, { Component } from 'react';

class ListCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                { id: 1, name: 'HTML'  },
                { id: 2, name: 'CSS'  },
                { id: 3, name: 'Javacript'  },
                { id: 4, name: 'ReactJS'}
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>List of Courses</h1>
                <ul>
                    {this.state.courses.map(course => (
                        <li key={course.id}>
                            <strong>{course.name}</strong>: {course.description}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListCourse;