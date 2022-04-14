import { InferGetStaticPropsType } from 'next'

type user = {
    id: number
    name: string
  }
function UserList ({ users }: InferGetStaticPropsType<typeof getStaticProps>){
    return (
        <>
            <h1>List of users</h1>
            {
                users.map((user:any) =>{
                    return (
                        <div key={user.id}>
                            <span>{user.name}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserList

export async function getStaticProps(){

    /* Api Users */
    const users = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data_users: user[] = await users.json()
    //console.log(data_users)



    /* Api Todos */
    const todos = await fetch ('https://jsonplaceholder.typicode.com/todos')
    const data_todos = await todos.json()
    //console.log(data_todos)

    return{
        props:{
            users: data_users,
            todos: data_todos,
        },
    }

}