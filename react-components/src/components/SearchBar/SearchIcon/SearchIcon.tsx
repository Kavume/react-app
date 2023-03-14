import React, {Component} from 'react';

interface SearchIconProps {
    fill: string;
    stroke: string;
    className: string;
}

class SearchIcon extends Component<SearchIconProps> {
    constructor(props: SearchIconProps) {
        super(props);
    }

    render() {
        return (
            <svg className={this.props.className} width="21" height="20" viewBox="0 0 21 20" fill={this.props.fill}
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.79099" cy="8.06162" r="7.31101" stroke={this.props.stroke} strokeWidth="1.5"/>
                <path d="M14.4546 13.0656L19.939 18.5494" stroke={this.props.stroke} strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        );
    }
}

export default SearchIcon;