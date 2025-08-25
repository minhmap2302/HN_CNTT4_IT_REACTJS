import { Component } from 'react'
type State = {
    studentList:string[];
}

export default class SubjectList extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state = {
            studentList:["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        }
    }
  render() {
    return (
      <div>
        <h2>Mon hoc co danh sach</h2>
        <div>
            {this.state.studentList.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            </div>

      </div>
    )
  }
}
