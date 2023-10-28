import { v4 as uuidv4 } from 'uuid';
import "../css/style.css"
const todos = [
    {
        id : uuidv4(),
        title : "Title 1",
        desc : " title description 1 "
    },
    {
        id : uuidv4(),
        title : "Title 2",
        desc : " title description 2 "
    },
    {
        id : uuidv4(),
        title : "Title 3",
        desc : " title description 3 "
    },
    {
        id : uuidv4(),
        title : "Title 4",
        desc : " title description 4 "
    },
]

const UniqueListId = () => {
    return (
        <div>
            {
                todos.map((todo)=>{
                    const {id,title,desc} = todo
                    return(
                        <div className='card' key={id} >
                            <h1 className='cardTitle'> {title} </h1>
                            <p className='cardDesc'> {desc } </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default UniqueListId;