import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc)
    {
        alert("Title or Description cannot be blank")
    }
    else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    
    }
    return (
        <div className='container' my-3 >
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
