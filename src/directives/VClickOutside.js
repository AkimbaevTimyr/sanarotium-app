import directives from "@/directives/index";

export default {
    name: 'click-outside',
    mounted(el, binding) {
        console.log('click-outside');
        console.log('el', el);
        const bubble = binding.modifiers.bubble;
        const handler = e => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
                console.log('mousedown');
                binding.value();
            }
        };
        el.__vueClickOutside__ = handler;
        // add Event Listeners
        document.addEventListener("mousedown", handler);
    },
    beforeUnmount(el) {
        document.removeEventListener("mousedown", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
    },
};

