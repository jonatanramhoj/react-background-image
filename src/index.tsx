import * as React from 'react';
import { useEffect, createRef } from 'react';
import './styles.scss';

const BackgroundImage = (props: {
  src: string;
  placeholder: string;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}) => {
  const hdImage = createRef<HTMLDivElement>();
  const { placeholder, className, src, children, ...rest } = props;

  useEffect(() => {
    const newImage = document.createElement('img');
    const hdImageRef = hdImage.current!;
    newImage.src = src;
    newImage.onload = () => {
      hdImageRef.setAttribute('style', `background-image: url('${src}')`);
      hdImageRef.classList.add('react-bg-img-hd-fade-in');
    };
  }, []);

  return (
    <div
      className={`react-bg-img-container ${className ? className : ''}`}
      {...rest}
    >
      <div className='react-bg-img-hd' ref={hdImage} />
      <div
        className='react-bg-img-placeholder'
        style={{ backgroundImage: `url('${placeholder}')` }}
      />
      {children}
    </div>
  );
};

export default BackgroundImage;
