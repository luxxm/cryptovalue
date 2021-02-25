import './Sidebar.css';
import themes from './themes';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function transition(elem) {
    var loadscreen = document.getElementById("loadscreen");

    var home = document.getElementsByClassName("App")[0];
    var crypto = document.getElementsByClassName("Crypto")[0];
    var saved = document.getElementsByClassName("Saved")[0];
    
    loadscreen.style.height = '100vh';
    await sleep(500);

    if (elem == "CRYPTO") {
        home.style.display = 'none';
        crypto.style.display = 'block';
        saved.style.display = 'none';
    } else if (elem == "HOME") {
        home.style.display = 'block';
        crypto.style.display = 'none';
        saved.style.display = 'none';
    } else if (elem == "SAVED") {
        home.style.display = 'none';
        crypto.style.display = 'none';
        saved.style.display = 'block';
    }

    loadscreen.style.height = '0vh'
}

function SidebarButton(props) {
    return(
        <div class="sidebar-button" onClick={() => transition(props.name)}>
            <img src={props.path} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    );
}

function popOut() {
    var themSel = document.getElementById('theme-selector');

    themSel.style.opacity = (themSel.style.opacity == '1') ? '0' : '1';
    themSel.style.visibility = (themSel.style.opacity == '1') ? 'visible' : 'hidden';
}

function themeChange(theme) {
    themes.dark();

    theme();
}

function ThemeSelector(props) {
    return(
        <div id="theme-selector">
            <h2>Themes</h2>

            <div class='theme-div' onClick={() => themeChange(themes.dark)}>
                <img src='other/home.png' />
                <button>DARK</button>
            </div>
            <div class='theme-div' onClick={() => themeChange(themes.light)}>
                <img src='other/home.png' />
                <button>LIGHT</button>
            </div>
            <div class='theme-div' onClick={() => themeChange(themes.silver)}>
                <img src='other/home.png' />
                <button>SILVER</button>
            </div>
            <div class='theme-div' onClick={() => themeChange(themes.cord)}>
                <img src='other/home.png' />
                <button>CORD</button>
            </div>
            <div class='theme-div' onClick={() => themeChange(themes.solarized)}>
                <img src='other/home.png' />
                <button>SOLARIZED</button>
            </div>
            <div class='theme-div' onClick={() => themeChange(themes.bny)}>
                <img src='other/home.png' />
                <button>BNY</button>
            </div>
        </div>
    );
}

function Settings(props) {
    return(
        <div id="settings" class="sidebar-button" onClick={ () => popOut() }>
            <img src={props.path} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    );
}

function Sidebar() {
    return(
        <div id="sidebar">
            <SidebarButton path="other/home.png" name="HOME" cls="App" />
            <SidebarButton path="other/stocks.png" name="CRYPTO" cls="Crypto" />
            <SidebarButton path="other/watchlist.png" name="SAVED" cls="Saved"/>
            <Settings path="other/home.png" name="SETTINGS"  />
            <ThemeSelector />
        </div>
    );
}

export default Sidebar;