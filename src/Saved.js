import './Saved.css';
import {getCookie, setCookie} from './cookieHandler';
import Graph from './Graph';

function Saved(props) {
    var list = [];
    var cookieData = getCookie('saved');

    var xState = true;
    var yState = 4;

    if (Array.isArray(cookieData)) {
        for (var i in cookieData) {
            list.push(
                <Graph parent={props.parent} x={xState ? '0' : '45'} y={yState.toString()} coin={cookieData[i]} days='1' />
            );

            xState = !xState;

            if (xState)
                yState += 31;
        }
    }

    if (!cookieData)
        console.log('Cookie don\'t exist')

    return(
        <div class="Saved">
            {list}
        </div>
    );
}

export default Saved;