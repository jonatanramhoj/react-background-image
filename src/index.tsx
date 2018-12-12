/**
 * @class BackgroundImage
 */

import * as React from "react";
import styles from "./styles.css";

export type Props = {
  src: string;
  placeholder: string;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
};

export default class BackgroundImage extends React.Component<Props> {
  hdImage: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.hdImage = React.createRef();
  }

  componentDidMount() {
    const newImage = document.createElement("img");
    const hdImageRef = this.hdImage.current!; // Using ! to remove undefined/null from type definition
    newImage.src = this.props.src;
    newImage.onload = () => {
      hdImageRef.setAttribute(
        "style",
        `background-image: url('${this.props.src}')`
      );
      hdImageRef.classList.add(`${styles.backgroundImageHdFadeIn}`);
    };
  }

  render() {
    const { placeholder, className, children, ...rest } = this.props;
    return (
      <div
        className={`${styles.backgroundImageContainer} ${
          className ? className : ""
        }`}
        {...rest}
      >
        <div className={styles.backgroundImageHd} ref={this.hdImage} />
        <div
          className={styles.backgroundImagePlaceholder}
          style={{ backgroundImage: `url('${placeholder}')` }}
        />
        {children}
      </div>
    );
  }
}
