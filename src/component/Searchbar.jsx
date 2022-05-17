import "../App.css"
import { Component } from "react"
import PropTypes from "prop-types";
export class Searchbar extends Component {
    state = {
        inputValue:""
    }
    static propTypes = {
        seararchTitle: PropTypes.func.isRequired,
    };
    writeTitle = (event) => {
        this.setState({ inputValue:event.currentTarget.value.toLowerCase() })
    }
    formReset = () => {
        this.setState({inputValue:""})
    }
    submitTitle = (event) => {
        event.preventDefault();
        if (this.state.inputValue.trim() === "") {
            alert("input some")
            return;
        }
        this.props.seararchTitle(this.state.inputValue);
        this.formReset();

    }



    render() {
        return <header className="Searchbar">
    <form className="SearchForm" onSubmit={this.submitTitle}>
    <button   type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
    </button>

    <input onChange={this.writeTitle}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
                    placeholder="Search images and photos"
                    value={this.state.inputValue}
    />
    </form>
</header>
    }
}