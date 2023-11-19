import styles from "./Settings.module.scss";
import clsx from "clsx";
import React from "react";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: 1, select: '4'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: +event.target.value
        });
    }

    handleSubmit() {
        this.props.handleRoll(this.state);
    }

    render() {
        return (
            <div className={clsx("d-flex jc-center ai-center", styles.settings)}>
                <label htmlFor="input" title="How many dice?" className={clsx(styles.label)}>
                    <input id="input" type="number" className={clsx("box-sizing", styles.input)}
                           name="input" value={this.state.input} onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="select" title="Choose how many sides" className={clsx(styles.label)}>
                    <select id="select"
                            className={clsx("box-sizing", styles.input)}
                            name="select"
                            value={this.state.select}
                            onChange={this.handleChange}
                    >
                        <option value="4">D4</option>
                        <option value="6">D6</option>
                        <option value="8">D8</option>
                        <option value="10">D10</option>
                        <option value="12">D12</option>
                        <option value="16">D16</option>
                        <option value="20">D20</option>
                    </select>
                </label>
                <button className={clsx("box-sizing", styles.button)}
                        onClick={this.handleSubmit}
                >Roll the dice</button>
            </div>
        );
    }
}

export default Settings;