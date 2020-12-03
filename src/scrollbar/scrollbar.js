export const getScrollbar = (node) => { console.log(node);
    const div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    node.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();        
    node.style.paddingRight = scrollWidth + 'px';
}

