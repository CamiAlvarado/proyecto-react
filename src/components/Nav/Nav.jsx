import logo from '../../img/logo-series-max.png';
import './styles.css'

const Nav = () => {
    return (
        <nav>
        <div className="nav__container">
            <div className="nav__container--brand>">
                <div className="nav__container--img">
                <img src={logo} alt="logo" />
                    <h3>Series Max</h3>
                </div>

            </div>
            <div class="nav__menu">
                <ul>
                    <li>Últimos estrenos</li>
                    <li>Clásicos</li>
                    <li>Ranking</li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Nav