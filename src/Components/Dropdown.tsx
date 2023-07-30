import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropdownComponent = ({ data, setOption, coinName, setCoinName }: any) => {
    return (
        <DropdownButton variant='secondary' style={{ marginBottom: '20px', width: '100%' }} id="dropdown-basic-button" title={coinName.length === 0 ? 'Coins' : coinName}>
            {data.map((item: any, index: any) => (
                <Dropdown.Item key={index} onClick={() => { setOption(item.id); setCoinName(item.name) }}>{item.name}</Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

export default DropdownComponent;