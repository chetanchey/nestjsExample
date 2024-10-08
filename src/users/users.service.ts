import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "chetan",
            "email": "chetan@gmail.com",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "lalit",
            "email": "lalit@gmail.com",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "dharmi",
            "email": "dharmi@gmail.com",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "syed",
            "email": "syed@gmail.com",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "raju",
            "email": "raju@gmail.com",
            "role": "INTERN",
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER'){
        if(role){
        return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id : number){
        const user = this.users.find(user => user.id === id)

        return user
    }

    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' }) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
