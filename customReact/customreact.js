
function customRender(reactEelment,container){
    /*
    const domElement =document.createElement(reactEelment.type)
    domElement.innerHTML=reactEelment.Children
    domElement.setAttribute('href',reactEelment.props.href)
    domElement.setAttribute('target',reactEelment.props.target)
    container.appendChild(domElement)*/

    const domElement=document.createElement(reactEelment.type);
    domElement.innerHTML=reactEelment.children
    for(const prop in reactEelment.props){
        if(prop=='children') continue;
        domElement.setAttribute(prop,reactEelment.props[prop])
    }
    container.appendChild(domElement)
}

const reactEelment = {

    type:'a',
    props:{
        href:'http://google.com',
        target: '_blank',
    },
    children:'Click me to visit google'

}
// first we create a object which is similar to react element and then we will create a function render which will take this object and create a dom element and append it to the container


const mainContainer = document.getElementById("root");

customRender(reactEelment, mainContainer)