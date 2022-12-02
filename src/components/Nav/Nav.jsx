import logo from '../../img/logo-series-max.png';
import './styles.css'

const Nav = () => {
    return (
        <nav>
        <div className="nav__container">
            <div className="nav__container--brand>">
                <div className="nav__container--img">
                <img src={logo} alt="logo" />
                </div>

            </div>
            <div class="nav__menu">
                <ul>
                    <li>Últimos estrenos</li>
                    <li>Mejores series 2022</li>
                    <li>Ranking</li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Nav