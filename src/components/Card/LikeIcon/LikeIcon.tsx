import React, { Component } from 'react';

interface LikeIconProps {
  fill: string;
  className: string;
  color: string;
}

class LikeIcon extends Component<LikeIconProps> {
  constructor(props: LikeIconProps) {
    super(props);
  }
  render() {
    return (
      <svg
        className={this.props.className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={this.props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.39 16.49V6.32998C6.39 5.92998 6.51 5.53998 6.73 5.20998L9.46 1.14998C9.89 0.499975 10.96 0.0399752 11.87 0.379975C12.85 0.709975 13.5 1.80997 13.29 2.78997L12.77 6.05998C12.73 6.35998 12.81 6.62998 12.98 6.83998C13.15 7.02998 13.4 7.14997 13.67 7.14997H17.78C18.57 7.14997 19.25 7.46997 19.65 8.02997C20.03 8.56997 20.1 9.26997 19.85 9.97997L17.39 17.47C17.08 18.71 15.73 19.72 14.39 19.72H10.49C9.82 19.72 8.88 19.49 8.45 19.06L7.17 18.07C6.68 17.7 6.39 17.11 6.39 16.49ZM3.21 4.37898H2.18C0.63 4.37898 0 4.97897 0 6.45897V16.519C0 17.999 0.63 18.599 2.18 18.599H3.21C4.76 18.599 5.39 17.999 5.39 16.519V6.45897C5.39 4.97897 4.76 4.37898 3.21 4.37898Z"
          fill={this.props.color}
        />
      </svg>
    );
  }
}

export default LikeIcon;
