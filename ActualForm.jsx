import React from 'react'
function ActualForm(props){
    let{handleChangeName,handleChangeAge,handleSubmit,styles}=props;
    return(
        <div>
            <form style={styles}>

                <lable>Name:</lable>
                <input type='text' placeholder='Enter name here'id='nameIp' onChange={handleChangeName}/>
                <br/>
                <br/>
                <lable>Age:</lable>
                <input type='text' placeholder='Enter Age here'id='nameIp' onChange={handleChangeAge}/>
                <br/>
                <br/>
            </form>
        </div>
    )
}export default ActualForm