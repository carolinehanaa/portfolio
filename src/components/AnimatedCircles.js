import React from 'react';
import { useEffect } from 'react';


const AnimatedCircles = () => {
    useEffect(() => {
        const createCircle = () => {
          const colors = ['radial-gradient(circle, rgba(51,0,130,1) 0%, rgba(90,0,117,1) 100%)'];
          const sizes = [ 100, 200];
          const circle = document.createElement('div');
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = sizes[Math.floor(Math.random() * sizes.length)];
          const x = Math.floor(Math.random() * (window.innerWidth - size * 2)) + size;
          const y = Math.floor(Math.random() * (window.innerHeight - size * 2)) + size;
          circle.style.background = color;
          circle.style.width = `${size}px`;
          circle.style.height = `${size}px`;
          circle.style.borderRadius = '50%';
          circle.style.position = 'absolute';
          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;
          circle.classList.add('circle');
    
          document.body.appendChild(circle);
        };
    
        for (let i = 0; i < 5; i++) {
          createCircle();
        }
      }, []);
    
      return (
        <div className="animated-circles"></div>
      );
};

export default AnimatedCircles;