const { createApp } = Vue
  let CounterApp = {
    template: `
    <p class="ddd ms-3">{{ name }}</p>
    <p class="dd ms-3">{{ name1 }}</p>
    <p class="ddd ms-3">{{ name2 }}</p>
    `,
    methods: {
    },
    props: ["name","name1","name2",],
    data() {
        return {
          
        };
    },
};

createApp({
    data() {
        return {
        };
    },
    computed: {},
    components: {
        CounterApp,
    },
}).mount("#demo");