/**
 * @class BackgroundImage
 */

import * as React from "react";
import styles from "./styles.css";

export type Props = { src: string; placeholder: string };

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
        `background-image: url('${this.props.src}')`,
      );
      hdImageRef.classList.add(`${styles.backgroundImageHdFadeIn}`);
    };
  }

  render() {
    return (
      <div className={styles.backgroundImageContainer}>
        <div className={styles.backgroundImageHd} ref={this.hdImage} />
        <div
          className={styles.backgroundImagePlaceholder}
          style={{ backgroundImage: `url('${this.props.placeholder}')` }}
        />
      </div>
    );
  }
}
