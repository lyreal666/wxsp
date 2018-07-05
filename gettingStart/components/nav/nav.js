Component({
    multipleSlots: true,
    properties: {
        tabs: {
            type: Array,
            value: ['科一', '科二', '科三', '科四']
        },
    },
    data: {
        selected: 0,
    },
    methods: {
        showUnderLine(event) {
            this.setData({
                selected: event.currentTarget.dataset.index
            });
        },  
    }
})