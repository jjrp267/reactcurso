import "./ListComponent.css";

const ListComponent = () => {

    const ITEMS = ['cat', 'dog', 'rat']
    function getItemsList(){
        return ITEMS.map(item => <li key={item}>{item}</li>);
    }
    
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
}

export default ListComponent;
