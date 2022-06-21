LottieInteractivity.create({
    player:'#favorite',
    mode:"chain",
    actions: [
        {
           state: 'click',
           transition: 'click',
           forceFlag: true,
           frames: [0,33]
        },
        {
           state: 'none',
           transition: 'click'
        },
        {   
            frames: [35, 46],
            state: 'autoplay',
            transition: 'onComplete',
            reset: true
        }
    ]
});

