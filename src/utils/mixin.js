export default {
    data() {
        return {
            mixinScenes: []
        }
    },
    mounted() {
        if (process.env.NODE_ENV === 'development') {
            this.$nextTick(() => {
                if (this.mixinScenes && this.mixinScenes.length) {
                    for (let i in this.mixinScenes) {
                        this.mixinScenes[i].addIndicators()
                    }
                }
            })
        }



    }
}