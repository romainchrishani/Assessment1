import React, {useState}from 'react';
import './form.css'

function Form() {
    const [id,setId]=useState(1);
    const [name,setName]=useState("");
    const [gender,setGender]=useState("");
    const [province,setProvince]=useState("");
    const [comment,setComment]=useState("");

    const [list,setList]=useState([]);

    const[show,setShow]=useState(false);
    // const[editRecord,setEditRecord]=useState();

    const Submit=(e)=>{
        e.preventDefault();
        const data={id,name,gender,province,comment}
        // const data={name,gender,province,comment}

        if(name&&comment){
            setList((ls)=>[...ls,data])
            setId(id+1)
            setName("")
            setGender("")
            setProvince("")
            setComment("")
        }
    }

    const Delete=(index)=>{
        console.log(index)
        list.splice(index,1)
        setList([...list])
    }

    const Edit=([id,name,gender,province,comment])=>{
        setId(id)
        setName(name)
        setGender(gender)
        setProvince(province)
        setComment(comment)
        setShow(true)
        // setEditRecord(id)
    }

    const Update=()=>{
        // list.splice(editRecord,1)

        const currentRecordIndex = list.findIndex((record) => record.id === id);

        list.splice(currentRecordIndex,1)

        const LastRecordIndex = (list.length)+1;

        const data={id,name,gender,province,comment}
        // const data={name,gender,province,comment}

        if(name&&comment){
            setList((ls)=>[...ls,data])
            setId(LastRecordIndex+1)
            setName("")
            setGender("")
            setProvince("")
            setComment("")
        }
        ActiveSubmitButton()
    }

    const ActiveSubmitButton=()=>{
            setShow(false)
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
                            <select className='select' value={province} onChange={e=>setProvince((e).target.value)}>
                                <option>Western Province</option>
                                <option>Eastern Province</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th><label className='comment'>Comment</label></th>
                        <th className='comment_th'><input className='comment' type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/></th>
                    </tr>
                </table>
                {/* <button className='submit_button' onClick={Submit}>Submit</button> */}
                {!show?(<button className='submit_button' onClick={Submit}>Submit</button>):(<button className='submit_button' onClick={Update}>Update</button>)}
            </div>
            <div className='section2'>
                <div className='scrollBar'>
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
                                    <button className='edit_button' onClick={()=>Edit([a.id,a.name,a.gender,a.province,a.comment])}>Edit</button>
                                </td>
                            </tr>
                        )
                        }
                </table>
                </div>
            </div>
        </div>
    );
}

export default Form;