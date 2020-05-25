import * as components from './components'
var VuePlugin = {}
VuePlugin.install = function(Vue, options) {
    for(let component in components) {
        console.log(component,'component')
        Vue.component('le'+component, components[component]);
    }
}
export default VuePlugin