import { Fragment, useState } from "react"; 
interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void;
}
function ListGroup({items, heading,onSelectItem}: Props) {

    const [selectedIndex, setSelectedIndex]=useState(-1);
    const [name,setName]=useState('');
    heading="";

  return (
    <Fragment>
        <h1>List</h1>
        {items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
        {items.map((item,index) =>(
            <li 
            className={selectedIndex === index 
                ? 'list-group-item active' 
                : 'list-group-item'
            } 
            key={item} 
            onClick={()=>{setSelectedIndex(index);
                onSelectItem(item);
             }}
            >
                {item}
                </li>
            ))}
        </ul>
    </Fragment>
  );
}
export default ListGroup;
