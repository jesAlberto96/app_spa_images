import queryString from 'query-string'
import { useForm } from '../../hooks/index';
import '../../styles/NavBar.css';

export const Navbar = () => {
    const { q = '' } = queryString.parse( location.search );
    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const iconApp = `/assets/logos/icon_nav.png`;

    return (
        <nav className="p-2 navBar">

            <div className="navBar_logo">
                <img src={ iconApp } alt="" />
            </div>
            <div className="navBar_input-search">
                <input
                    type="search"
                    name="searchText"
                    className="search-input"
                    placeholder='You´re looking for something?'
                    autoComplete="off"
                    value={ searchText }
                    onChange={ onInputChange }
                />
            </div>
        </nav>
    )
}