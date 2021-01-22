

export default function setSidebarResponsiveValues(dispatch) {
    return function (element) {
        if (element) {
            const clientHeight = window.document.documentElement.clientHeight;
            const sidebarCount = element.children.length;
            const responsiveHeight = Math.floor(clientHeight / sidebarCount);
    
            const childrens = element.children;
            for (let o = 0; o < element.children.length; o++) {
                if (childrens[o].tagName !== 'LI') {
    
                    childrens[o].firstElementChild.style.height = `${responsiveHeight}px`;
                    childrens[o].firstElementChild.children[0].style.fontSize = `${responsiveHeight / 3}px`;
                    childrens[o].firstElementChild.children[1].style.fontSize = `${responsiveHeight / 3}px`;
    
                } else {
                    childrens[o].style.height = `${responsiveHeight}px`;
                }
            }
            dispatch({ type: 'SET_SIDEBAR_VALUES', payload: element });
        }

    }
}

