import { Component } from "react"

import "../card/card.css"
import Cat from "../images/Cat.png"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.data.selected,
            hover: false
        };
    }
    onSelected = () => {
        let selected = this.state.selected;
        if (selected) {
            this.setState({ selected: false, hover: false })
        } else {
            this.setState({ selected: true })
        }
    }
    onSelectedHover = () => {
        const { selected } = this.state;
        if (selected) {
            this.setState({ hover: true })
        }
    }
    offSelectedHover = () => {
        const { selected } = this.state;
        if (selected) {
            this.setState({ hover: false });
        }
    }


    render() {
        const { name, taste, portions, present, weight, id, ended } = this.props.data;
        const { selected, hover } = this.state;

        const defaultOffer = this.defaultOffer();
        const selectedOffer = this.selectedOffer();
        const disabledOffer = this.disabledOffer();
        const defaultSupheader = this.defaultSupheader();
        const selectedHoverSupheader = this.selectedHoverSupheader();

        const supheader = (hover && selected && !ended) ? selectedHoverSupheader : defaultSupheader;
        const offer = ended ? disabledOffer : (selected ? selectedOffer : defaultOffer);


        return (
            <div className="card" key={id}  >
                <div className={"card-border " + (ended ? "disabled" : (selected ? "selected" : null))} >
                    <div className="card__view " onClick={this.onSelected} onMouseEnter={this.onSelectedHover} onMouseLeave={this.offSelectedHover}>
                        <img className={"card__img " + (ended ? "disabled-img" : null)} src={Cat} alt="Нямушка с рыбой" />
                        <div className="content">
                            {supheader}
                            <div className={"header " + (ended ? "disabled-color" : null)}>{name}</div>
                            <div className={"taste " + (ended ? "disabled-color" : null)}>{taste}</div>
                            <div className={"descr " + (ended ? "disabled-color" : null)}>{portions} порций <br /> {present}</div>
                            <div className={"round " + (ended ? "disabled" : (selected ? "selected" : null))}>
                                <div className="weight ">{weight}</div>
                                <div className="unit ">кг</div>
                            </div>
                        </div>
                    </div>
                </div>
                {offer}
            </div>
        )
    }


    defaultOffer() {
        return <div className="offer">Чего сидишь? Порадуй котэ, <span onClick={this.onSelected} >купи</span>.</div>
    }
    selectedOffer() {
        const { offer } = this.props.data;
        return <div className="offer">{offer}</div>
    }
    disabledOffer() {
        const { descrIfDisabled } = this.props.data;
        return <div className="offer offer__disabled">{descrIfDisabled}</div>
    }

    defaultSupheader() {
        const { supheader, disabled } = this.props.data;
        return <div className={"supheader " + (disabled ? "disabled-color" : null)}>{supheader}</div>
    }
    selectedHoverSupheader() {
        return <div className={"selectedSupheader "}>Котэ не одобряет?</div>
    }
}

export default Card;