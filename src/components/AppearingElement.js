import React from 'react';

function AppearingElement(props) {
    const [visible, setVisible] = React.useState(true);
    const [hasAppeared, setHasAppeared] = React.useState(false);
    const domRef = React.useRef();

    const config = {
        root: null,
        rootMargin: '0px',
        threshold: props.threshold || (props.variant === 'zoom-down' ? '1.0' : '0.70')
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
               setVisible(entry.isIntersecting);
               if (entry.isIntersecting) {
                   setHasAppeared(true);
               }
            });
        }, config);

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div
            className={`appearing-element--${props.variant || 'zoom-up'} ${visible || hasAppeared ? 'visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default AppearingElement;