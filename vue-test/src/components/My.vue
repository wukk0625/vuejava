<template>
    <div class="my">
        <p>MyList</p>
        <div class="left">
            <ul>
                <li><router-link to="Content">Content</router-link></li>
                <li><router-link to="We">We</router-link></li>
                <li><router-link to="#">A评论</router-link></li>
                <li><router-link to="#">B评论</router-link></li>
                <li><router-link to="#">C评论</router-link></li>
            </ul>
        </div>
        <div class="right">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "My",
    data() {
        return {
            msg: "My"
        };
    },
    mounted() {
        const Qs = require("qs");
        const url = "api/json/list";

        let obj = {
            id: 789,
            name: "jack",
            pwd: "123"
        };
        //qs.parse()是将URL解析成对象的形式
        let query = Qs.parse(obj);

        this.$axios
            .post(url, query)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
    float: left;
    margin: 0;
    color: black;
    width: 30%;
    height: 50%;
    background-color: #ffcb04;
}
.right {
    float: left;
    margin: 0;
    color: black;
    width: 30%;
    height: 50%;
    background-color: #ffcb04;
}
</style>
