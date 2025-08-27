import { useMemo } from 'react'

interface User {
    id: number;
    name: string;
    age: number;
}

export default function UserList() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const users: User[] = [
        {
            id:1,
            name:"Nguyen Tien Minh",
            age:19
        },
        {
            id:2,
            name:"Doan Thi Thu Tran",
            age:19
        },
        {
            id:1,
            name:"Le Van Duy",
            age:18
        },
    ]
    const filteredUsers = useMemo (() => {
        return users.filter((user) => user.age > 18);
    }, [users]);
  return (
    <div>
        <h2>Danh Sach Nguoi Dung Tren 18</h2>
        <ul>
            {filteredUsers.map((user) => (
                <li key = {user.id}>
                    {user.name} - {user.age} tuoi
                </li>
            ))}
        </ul>
    </div>
  )
}

