import React, {useState}from 'react';
import './form.css'

function Form() {
    const [name,setName]=useState("");
    const [gender,setGender]=useState();
    const [province,setProvince]=useState();
    const [comment,setComment]=useState();

    const [list,setList]=useState([]);

    const Submit=(e)=>{
        e.preventDefault();
        const data={name,gender,province,comment}

        if(name&&comment){
            setList((ls)=>[...ls,data])
            setName("")
            setComment("")
        }
    }

    const Delete=(index)=>{
        // console.log(index)
        list.splice(index,1)
        setList([...list])
    }

    const Edit=(id)=>{
        setName(list[id])
        setGender(list[id])
        setProvince(list[id])
        setComment(list[id])
    }

    return (
        <div className='container'>
            <div className='section1'>
                <table>
                    <tr>
                        <th><label className='name'>Name</label></th>
                        <th><input value={name} onChange={(e)=>setName(e.target.value)}/></th>
                    </tr>
                    <tr>
                        <th><label className='gender'>Gender</label></th>
                        <th>
                            <input type="radio" name='Gender' value="Male" onChange={(e)=>setGender(e.target.value)}/>Male
                            <input type="radio" name='Gender' value="Female" onChange={(e)=>setGender(e.target.value)}/>Female
                        </th>
                    </tr>
                    <tr>
                        <th><label className='province'>Province</label></th>
                        <th>
                            <select value={province} onChange={e=>setProvince((e).target.value)}>
                                <option>Western Province</option>
                                <option>Eastern Province</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th><label className='comment'>Comment</label></th>
                        <th className='comment_th'><input className='comment' type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/></th>
                    </tr>
                    <tr>
                        <button onClick={Submit}>Submit</button>
                    </tr>
                </table>
            </div>
            <div className='section2'>
                <table className='displaying_table'>
                    <tr>
                        <th className='displaying_th'>ID</th>
                        <th className='displaying_th'>Name</th>
                        <th className='displaying_th'>Gender</th>
                        <th className='displaying_th'>Province</th>
                        <th className='displaying_th'>Comment</th>                        
                        <th className='displaying_th'>Action</th>
                    </tr>
                        {list.map((a,id)=>
                        // <>
                            <tr key={a.id}>
                                <td className='displaying_td'>{a.id}</td>       
                                <td className='displaying_td'>{a.name}</td>
                                <td className='displaying_td'>{a.gender}</td>
                                <td className='displaying_td'>{a.province}</td>
                                <td className='displaying_td'>{a.comment}</td>
                                <td className='displaying_td'>
                                    <button className='delete_button' onClick={()=>Delete(id)}>Delete</button>
                                    <button className='edit_button' onClick={()=>Edit(id)}>Edit</button>
                                </td>
                            </tr>
                        )
                        }
                </table>
            </div>
        </div>
    );
}

export default Form;