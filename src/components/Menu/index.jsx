import { Button, MenuView, TopMenu, CenterMenu, FooterMenu, MenuItems, MenuAction} from './style'
import {useSelector, useDispatch} from 'react-redux'
import { changeUrl } from '../../redux/quote/actions';
import { useState } from 'react';
const Menu = () => {
    const array = useSelector((state)=>state.quote.arrButtons);
    const dispatch = useDispatch();
    const onClickFunction = (value)=>{  
        dispatch(changeUrl(value))
    }
    const [door, setDoor] = useState(false);

    return (
         <MenuView active={door}>     
            <MenuItems>
                <TopMenu></TopMenu>
                <CenterMenu>{
                        door?
                            array.map((value, ind)=>{
                                return (
                                    <Button key={ind} onClick={()=>{onClickFunction(value)}}>{value}</Button>
                                )
                            })
                        : false
                }
                </CenterMenu>
                <FooterMenu></FooterMenu>
             </MenuItems>  
             <MenuAction onClick={()=>setDoor(!door)}>{ door? String('<<'):String('>>')}</MenuAction>
        </MenuView>
    )
}
export default Menu