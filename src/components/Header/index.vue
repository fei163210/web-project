<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList" v-if="!User.phone">
          <p>闪购欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明式导航 -->
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="loginList" v-else>
          <p>闪购欢迎您！</p>
          <p>
            <span>{{ User.phone }}</span>
            <!-- 声明式导航 -->
            <a class="register" @click="clear">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的闪购</a>
          <a href="###">闪购会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注闪购</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="message"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="search"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    // 负责解构数据
    // state 为大仓库
    ...mapState({
      User: (state) => {
        return state.login.user;
      },
    }),
  },
  methods: {
    // 编程式导航
    search() {
      // 路由传参 三种方式 1.字符串形式 2. 模板字符串形式 3. 对象传参（常用）
      if (this.$route.query) {
        let location = {
          name: "search",
          params: { keyword: this.message || undefined },
        };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
    clear() {
      this.$store.state.login.user = {};
      localStorage.removeItem("ha", "login");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.$bus.$on("removeKey", () => {
      this.message = "";
    });
  },
};
</script>
<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>