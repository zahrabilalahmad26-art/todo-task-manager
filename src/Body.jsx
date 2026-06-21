import React, { useState } from 'react'

const Body = () => {
    const [add, setAdd] = useState("");
    const [todo, setTodo] = useState([]);
    const handleAdd = () => {
        setTodo([...todo, { add, isCompleted: false }])
        setAdd("");
    }
 const handleDelete = (index) => {
    let newTodo = todo.filter((item, i) => i !== index);
    setTodo(newTodo);
}
    const handleEdit = () => {

    }
    const handleCheck = (index) => {
    let updatedTodo = todo.map((item, i) =>
        i === index 
        ? {...item, isCompleted: !item.isCompleted}
        : item
    )

    setTodo(updatedTodo)
}
    return (
        <div className='w-[800px] h-full border-[2px] border-solid border-olive-500 bg-olive-400 ml-[200px] mt-[50px]'>
            <div className='text-3xl text-center font-bold mt-[20px]' >ZAZI TASKS - Manage your todo at one place   </div>
            <div className='text-xl font-bold ml-[20px] mt-[20px]'>Add a Todo</div>
            <div className='flex mt-[30px] ml-[20px]'>
                <input className='bg-white border-none w-[640px] h-[50px] rounded-full' value={add} onChange={(e) => setAdd(e.target.value)} />
                <button onClick={handleAdd} className='bg-olive-500 rounded-full w-[100px] h-[50px] ml-[10px]'>Save</button>
            </div>
            <hr class="border-t border-olive-500 my-4 ml-[30px] mr-[30px]" />
            <div>
                <div className='text-xl font-bold ml-[20px] mt-[20px]'>Your Todos</div>
                {todo.map((item,index) => {
                    return (
                        <div key={index} className='flex ml-[20px] mt-[30px]  justify-between '>
                            <div className='flex'>
                                <input
                                    type="checkbox"
                                    checked={item.isCompleted}
                                     onChange={() => handleCheck(index)}
                                />
                                <p
                                    className={`${item.isCompleted ? "line-through" : ""} text-xl ml-[10px] pt-[10px]`}>
                                    {item.add}
                                </p>
                            </div>
                            <div>
                                <button onClick={()=>handleEdit(index)} className='bg-olive-500 rounded-full w-[100px] h-[50px] ml-[10px]'>Edit</button>
                                <button onClick={()=>handleDelete(index)} className='bg-olive-500 rounded-full w-[100px] h-[50px] ml-[10px]'>Delete</button>
                            </div>
                        </div>
                    )

                })}
            </div>


        </div>
    )
}

export default Body
