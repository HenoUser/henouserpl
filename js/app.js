"use strict";

function getViewportHeight() {
    var a = document.documentElement.clientHeight, b = window.innerHeight;
    return a < b ? b : a;
}

function getViewportScroll() {
    if(typeof window.scrollY != 'undefined') {
        return window.scrollY;
    }
    if(typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    var doc = document.documentElement;
    doc = doc.clientHeight ? doc : document.body;
    return doc.scrollTop;
}

function scroll() {
    var offset = getViewportScroll(),
        el = $('header')[0],
        elOffset = el.offsetTop;
    el.style.marginBottom= ((Math.round((elOffset - offset)*1)))+'px';
    el.style.opacity = 1+Math.round(elOffset - offset)/$(el).height()*1.7;
}

$(window).on("scroll", scroll);
