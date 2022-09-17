<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="showTypeNav" @mouseleave="closeTypeNav">
        全部商品分类
      </h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div
          class="sort"
          v-show="show"
          @mouseenter="showTypeNav"
          @mouseleave="closeTypeNav"
        >
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in CateList"
              :key="c1.categoryId"
            >
              <h3>
                <a
                  :data-categoryname="c1.categoryName"
                  :data-categoryId1="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a
                        :data-categoryname="c2.categoryName"
                        :data-categoryId2="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          :data-categoryname="c3.categoryName"
                          :data-categoryId3="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      // 决定是否显示
      show: true,
    };
  },
  computed: {
    // 负责解构数据
    // state 为大仓库
    ...mapState({
      CateList: (state) => {
        return state.home.CateList;
      },
    }),
  },
  mounted() {
    // 组件挂载时会去请求数据，存放在仓库中
    // 判断当前页面是否是非主页，将导航隐藏
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  methods: {
    goSearch(event) {
      // 获取点击的元素
      let node = event.target;
      let { categoryname, categoryid1, categoryid2, categoryid3 } =
        node.dataset;

      // 判断点击的对象是不是a标签;
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (categoryid1) {
          query.category1Id = categoryid1;
        } else if (categoryid2) {
          query.category2Id = categoryid2;
        } else {
          query.category3Id = categoryid3;
        }

        // 在传参时加上当前目录里的
        location.query = query;
        location.params = this.$route.params;
        this.$router.push(location);
      }
    },
    showTypeNav() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    closeTypeNav() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            a {
              text-decoration: none;
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .item:hover {
          background-color: deepskyblue;
        }
      }
    }
    // 过度动画的样式
    // 过度动画开始状态
    .sort-enter {
      height: 0px;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all 0.1s linear;
    }
  }
}
</style>