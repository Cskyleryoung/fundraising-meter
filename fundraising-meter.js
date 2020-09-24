(function () {
    
    /**
     * Capture settings from element data. Set defaults.
     */
    const container = document.getElementById('fundraising-meter');
    const title = container.getAttribute('data-title') || '';
    const goal = container.getAttribute('data-goal') || 0;
    const raised = container.getAttribute('data-raised') || 0;
    const color = container.getAttribute('data-color') || '35, 207, 130';
    const height = container.getAttribute('data-height') || 300;
    const width = container.getAttribute('data-width') || 60;
    const segments = 11;

    /**
     * Take fundraising data and builds an HTML/CSS display meter for it.
     * Fairly long as it contains all of the markup.
     * 
     * @param {Object} data - A Kindful data object.
     */
    function renderWidget() {

        let raisedPx = height / goal * raised;

        // Meter
        css(container, {
            'display': 'inline-block',
            'text-align': 'center'
        });

        // Goal heading
        let goalText = document.createElement('div');
        addClass(goalText, 'sv-kindful-meter-goal');
        goalText.innerHTML = 'Goal: $' + numberWithCommas(goal);
        css(goalText, {
            'font-size': '24px',
            'font-weight': '500'
        });
        container.appendChild(goalText);

        // Meter background
        let meterBg = document.createElement('div');
        addClass(meterBg, 'sv-kindful-meter-bg');
        css(meterBg, {
            'background': '#fff',
            'background': 'rgb(235,235,235)',
            'background': 'linear-gradient(90deg, rgba(235,235,235,1) 0%, rgba(235,235,235,0.45) 100%)',
            'border': '1px solid #999',
            'borderRadius': '12px',
            'box-shadow': '0px 2px 7px -2px rgba(0, 0, 0, 0.7)',
            'display': 'flex',
            'flex-direction': 'column',
            'height': height + 'px',
            'margin': '15px auto',
            'overflow': 'hidden',
            'position': 'relative',
            'width': width + 'px'
        });
        container.appendChild(meterBg);

        // Raised heading
        let raisedText = document.createElement('div');
        addClass(raisedText, 'sv-kindful-meter-raised');
        raisedText.innerHTML = '$' + numberWithCommas(raised);
        css(raisedText, {
            'bottom': height / 2 + 'px',
            'font-size': '32px',
            'font-weight': '600',
            'left': '50%',
            'position': 'absolute',
            'transform-origin': 'center',
            'transform': 'translateX(-50%) translateY(50%) rotate(90deg)'
        });
        meterBg.appendChild(raisedText);

        // Meter foreground
        let meterFg = document.createElement('div');
        addClass(meterFg, 'sv-kindful-meter-fg');
        css(meterFg, {
            'background': 'rgb(' + color + ')',
            'background': 'linear-gradient(90deg, rgba(' + color + ', 1) 0%, rgba(' + color + ', 0.6) 100%)',
            'bottom': '0',
            'height': raisedPx + 'px',
            'left': '0',
            'overflow': 'hidden',
            'position': 'absolute',
            'width': '100%',
            'z-index': '1'
        });
        meterBg.appendChild(meterFg);

        // Segments
        let segment = null;
        for (let i = 0; i < segments; i++) {
            segment = document.createElement('div');
            addClass(segment, 'sv-kindful-meter-segment');
            css(segment, {
                'border-bottom': '1px solid rgba(214, 214, 214, 0.3)',
                'flex': '1',
                'width': '100%',
                'z-index': '2'
            });
            meterBg.appendChild(segment);
        }

        // Raised heading foreground
        let raisedTextFg = document.createElement('div');
        addClass(raisedTextFg, 'sv-kindful-meter-raised-fg');
        raisedTextFg.innerHTML = '$' + numberWithCommas(raised);
        css(raisedTextFg, {
            'bottom': height / 2 + 'px',
            'color': '#fff',
            'font-size': '32px',
            'font-weight': '600',
            'left': '50%',
            'position': 'absolute',
            'text-shadow': '0 0 1px rgba(0,0,0,0.6)',
            'transform-origin': 'center',
            'transform': 'translateX(-50%) translateY(50%) rotate(90deg)'
        });
        meterFg.appendChild(raisedTextFg);

        // Meter Title
        let titleText = document.createElement('div');
        addClass(titleText, 'sv-kindful-meter-title');
        titleText.innerHTML = title;
        css(titleText, {
            'font-size': '21px',
            'font-weight': '500'
        });
        container.appendChild(titleText);
    }

    /**
     * Helper function.
     * Add a class to element.
     */
    function addClass(el, className) {
        if (el.classList) el.classList.add(className);
        else if (!hasClass(el, className)) el.className += ' ' + className;
    }

    /**
     * Helper function.
     * Add multiple styles as an object to an elmeent.
     */
    function css(el, styles) {
        for (var property in styles)
            el.style[property] = styles[property];
    }

    /**
     * Helper function.
     * Add commas to a number for display.
     */
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // return x.toFixed(2);
    }

    // Kick things off
    renderWidget();
})();